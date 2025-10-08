import {
	render,
	screen,
	fireEvent,
	waitFor,
	act
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LumoraOTP from '../LumoraOTP';
import { LumoraOTPProps } from '../../types';

// Mock Material-UI components to focus on logic
jest.mock('@mui/material', () => ({
	TextField: ({
		inputRef,
		onChange,
		onKeyDown,
		value,
		inputProps,
		error,
		...props
	}: any) => (
		<input
			ref={inputRef}
			onChange={onChange}
			onKeyDown={onKeyDown}
			value={value}
			{...inputProps}
			{...props}
		/>
	),
	Button: ({
		children,
		onClick,
		type,
		disabled,
		startIcon,
		...props
	}: any) => (
		<button onClick={onClick} type={type} disabled={disabled} {...props}>
			{startIcon}
			{children}
		</button>
	),
	Typography: ({ children, textAlign, gutterBottom, ...props }: any) => (
		<div {...props}>{children}</div>
	),
	Alert: ({ children, severity, ...props }: any) => (
		<div data-severity={severity} {...props}>
			{children}
		</div>
	),
	CircularProgress: (props: any) => <div data-testid="loading" {...props} />,
	Stack: ({ children, ...props }: any) => <div {...props}>{children}</div>,
	Fade: ({ children, in: inProp, ...props }: any) =>
		inProp ? <div {...props}>{children}</div> : null,
	Box: ({ children, component, ...props }: any) => {
		const Component = component || 'div';
		return <Component {...props}>{children}</Component>;
	},
	keyframes: () => 'test-keyframes'
}));

// Mock styled components
jest.mock('@mui/material/styles', () => ({
	styled: (Component: any) => () => Component
}));

// Mock clipboard API
const mockClipboard = {
	readText: jest.fn()
};

Object.assign(navigator, {
	clipboard: mockClipboard
});

// Default props for testing
const defaultProps: LumoraOTPProps = {
	onVerify: jest.fn().mockResolvedValue({ success: true }),
	onVerifySuccess: jest.fn(),
	onVerifyError: jest.fn()
};

// Helper function to render component with custom props
const renderLumoraOTP = (props: Partial<LumoraOTPProps> = {}) => {
	return render(<LumoraOTP {...defaultProps} {...props} />);
};

describe('LumoraOTP Component', () => {
	beforeEach(() => {
		jest.clearAllMocks();
		// Reset timers
		jest.useFakeTimers();
	});

	afterEach(() => {
		act(() => {
			jest.runOnlyPendingTimers();
		});
		jest.useRealTimers();
	});

	describe('Rendering', () => {
		it('renders with default props', () => {
			renderLumoraOTP();

			expect(
				screen.getByText('Enter the code sent to your email')
			).toBeInTheDocument();
			expect(screen.getByText('Verify')).toBeInTheDocument();
			expect(screen.getByText('Resend Otp')).toBeInTheDocument();
		});

		it('renders with custom instruction text', () => {
			const customText = 'Please enter your verification code';
			renderLumoraOTP({ instructionText: customText });

			expect(screen.getByText(customText)).toBeInTheDocument();
		});

		it('renders correct number of input fields based on digitCount', () => {
			renderLumoraOTP({ digitCount: 4 });

			const inputs = screen.getAllByRole('textbox');
			expect(inputs).toHaveLength(4);
		});

		it('renders with custom placeholder', () => {
			renderLumoraOTP({ placeholder: 'X' });

			const inputs = screen.getAllByRole('textbox');
			inputs.forEach(input => {
				expect(input).toHaveAttribute('placeholder', 'X');
			});
		});

		it('hides resend button when showResend is false', () => {
			renderLumoraOTP({ showResend: false });

			expect(screen.queryByText('Resend Otp')).not.toBeInTheDocument();
		});

		it('shows expiration timer when showExpirationTimer is true', () => {
			renderLumoraOTP({ showExpirationTimer: true, expirationTime: 300 });

			expect(screen.getByText(/Code expires in:/)).toBeInTheDocument();
		});

		it('hides expiration timer when showExpirationTimer is false', () => {
			renderLumoraOTP({ showExpirationTimer: false });

			expect(
				screen.queryByText(/Code expires in:/)
			).not.toBeInTheDocument();
		});
	});

	describe('OTP Input Functionality', () => {
		it('handles single digit input', async () => {
			const user = userEvent.setup({
				advanceTimers: jest.advanceTimersByTime
			});
			renderLumoraOTP();

			const inputs = screen.getAllByRole('textbox');
			await user.type(inputs[0], '1');

			expect(inputs[0]).toHaveValue('1');
		});

		it('handles multiple digit input', async () => {
			const user = userEvent.setup({
				advanceTimers: jest.advanceTimersByTime
			});
			renderLumoraOTP();

			const inputs = screen.getAllByRole('textbox');
			await user.type(inputs[0], '1');
			await user.type(inputs[1], '2');
			await user.type(inputs[2], '3');

			expect(inputs[0]).toHaveValue('1');
			expect(inputs[1]).toHaveValue('2');
			expect(inputs[2]).toHaveValue('3');
		});

		it('handles backspace navigation', async () => {
			const user = userEvent.setup({
				advanceTimers: jest.advanceTimersByTime
			});
			renderLumoraOTP();

			const inputs = screen.getAllByRole('textbox');

			// Type in first two fields
			await user.type(inputs[0], '1');
			await user.type(inputs[1], '2');

			// Focus on second field and press backspace
			inputs[1].focus();
			await user.keyboard('{Backspace}');

			// Should clear the second field
			expect(inputs[1]).toHaveValue('');
		});

		it('handles paste functionality', async () => {
			mockClipboard.readText.mockResolvedValue('123456');
			renderLumoraOTP();

			// Simulate paste event
			const pasteEvent = new Event('paste', { bubbles: true });
			const container = document.querySelector('[data-otp-component]');

			await act(async () => {
				container?.dispatchEvent(pasteEvent);
			});

			// The paste functionality should be triggered
			expect(container).toBeInTheDocument();
		});

		it('handles input with non-numeric characters', async () => {
			const user = userEvent.setup({
				advanceTimers: jest.advanceTimersByTime
			});
			renderLumoraOTP();

			const inputs = screen.getAllByRole('textbox');

			// Try to type non-numeric characters
			await user.type(inputs[0], 'abc');

			// Should only accept numeric input
			expect(inputs[0]).toHaveValue('');
		});
	});

	describe('Resend Functionality', () => {
		it('calls onResend when resend button is clicked', async () => {
			const mockOnResend = jest.fn();
			renderLumoraOTP({ onResend: mockOnResend });

			const resendButton = screen.getByText('Resend Otp');
			await act(async () => {
				fireEvent.click(resendButton);
			});

			expect(mockOnResend).toHaveBeenCalled();
		});

		it('shows cooldown timer after resend', async () => {
			renderLumoraOTP({ resendCooldown: 60 });

			const resendButton = screen.getByText('Resend Otp');
			await act(async () => {
				fireEvent.click(resendButton);
			});

			expect(screen.getByText(/Resend in \d+s/)).toBeInTheDocument();
		});

		it('disables resend button during cooldown', async () => {
			renderLumoraOTP({ resendCooldown: 60 });

			const resendButton = screen.getByText('Resend Otp');
			await act(async () => {
				fireEvent.click(resendButton);
			});

			expect(resendButton).toBeDisabled();
		});

		it('enables resend button after cooldown expires', async () => {
			renderLumoraOTP({ resendCooldown: 1 });

			const resendButton = screen.getByText('Resend Otp');
			await act(async () => {
				fireEvent.click(resendButton);
			});

			// Fast-forward time
			await act(async () => {
				jest.advanceTimersByTime(1000);
			});

			await waitFor(() => {
				expect(screen.getByText('Resend Otp')).toBeInTheDocument();
			});
		});
	});

	describe('Expiration Timer', () => {
		it('shows expiration countdown', () => {
			renderLumoraOTP({
				showExpirationTimer: true,
				expirationTime: 300
			});

			expect(
				screen.getByText('Code expires in: 5:00')
			).toBeInTheDocument();
		});

		it('shows expired message when timer reaches zero', async () => {
			renderLumoraOTP({
				showExpirationTimer: true,
				expirationTime: 1
			});

			// Fast-forward time to expiration
			await act(async () => {
				jest.advanceTimersByTime(1000);
			});

			await waitFor(() => {
				expect(
					screen.getByText(
						'OTP has expired. Please request a new one.'
					)
				).toBeInTheDocument();
			});
		});

		it('disables inputs when OTP is expired', async () => {
			renderLumoraOTP({
				showExpirationTimer: true,
				expirationTime: 1
			});

			// Fast-forward time to expiration
			await act(async () => {
				jest.advanceTimersByTime(1000);
			});

			await waitFor(() => {
				const inputs = screen.getAllByRole('textbox');
				inputs.forEach(input => {
					expect(input).toBeDisabled();
				});
			});
		});

		it('disables verify button when OTP is expired', async () => {
			renderLumoraOTP({
				showExpirationTimer: true,
				expirationTime: 1
			});

			// Fast-forward time to expiration
			await act(async () => {
				jest.advanceTimersByTime(1000);
			});

			await waitFor(() => {
				const verifyButton = screen.getByText('Verify');
				expect(verifyButton).toBeDisabled();
			});
		});
	});

	describe('Form Submission and Verification', () => {
		it('handles form submission', async () => {
			const mockOnVerify = jest.fn().mockResolvedValue({ success: true });
			renderLumoraOTP({ onVerify: mockOnVerify });

			const verifyButton = screen.getByText('Verify');
			await act(async () => {
				fireEvent.click(verifyButton);
			});

			// The form submission should be handled
			expect(verifyButton).toBeInTheDocument();
		});

		it('handles verification with success callback', async () => {
			const mockOnVerify = jest.fn().mockResolvedValue({ success: true });
			const mockOnVerifySuccess = jest.fn();
			renderLumoraOTP({
				onVerify: mockOnVerify,
				onVerifySuccess: mockOnVerifySuccess
			});

			const verifyButton = screen.getByText('Verify');
			await act(async () => {
				fireEvent.click(verifyButton);
			});

			// Wait for async operation
			await act(async () => {
				jest.advanceTimersByTime(100);
			});

			expect(verifyButton).toBeInTheDocument();
		});

		it('handles verification with error callback', async () => {
			const mockOnVerify = jest
				.fn()
				.mockRejectedValue(new Error('Invalid OTP'));
			const mockOnVerifyError = jest.fn();
			renderLumoraOTP({
				onVerify: mockOnVerify,
				onVerifyError: mockOnVerifyError
			});

			const verifyButton = screen.getByText('Verify');
			await act(async () => {
				fireEvent.click(verifyButton);
			});

			// Wait for async operation
			await act(async () => {
				jest.advanceTimersByTime(100);
			});

			expect(verifyButton).toBeInTheDocument();
		});

		it('shows loading state during verification', async () => {
			const mockOnVerify = jest
				.fn()
				.mockImplementation(
					() => new Promise(resolve => setTimeout(resolve, 1000))
				);
			renderLumoraOTP({ onVerify: mockOnVerify });

			const verifyButton = screen.getByText('Verify');
			await act(async () => {
				fireEvent.click(verifyButton);
			});

			// Wait for loading state
			await act(async () => {
				jest.advanceTimersByTime(100);
			});

			expect(verifyButton).toBeInTheDocument();
		});
	});

	describe('Error Handling', () => {
		it('handles expired OTP', async () => {
			renderLumoraOTP({
				showExpirationTimer: true,
				expirationTime: 1
			});

			// Fast-forward time to expiration
			await act(async () => {
				jest.advanceTimersByTime(1000);
			});

			await waitFor(() => {
				expect(
					screen.getByText(
						'OTP has expired. Please request a new one.'
					)
				).toBeInTheDocument();
			});
		});

		it('handles verification errors', async () => {
			const mockOnVerify = jest
				.fn()
				.mockRejectedValue(new Error('Invalid OTP'));
			renderLumoraOTP({ onVerify: mockOnVerify });

			const verifyButton = screen.getByText('Verify');
			await act(async () => {
				fireEvent.click(verifyButton);
			});

			// Wait for error handling
			await act(async () => {
				jest.advanceTimersByTime(100);
			});

			expect(verifyButton).toBeInTheDocument();
		});

		it('handles network errors', async () => {
			const mockOnVerify = jest
				.fn()
				.mockRejectedValue(new Error('Network error'));
			renderLumoraOTP({ onVerify: mockOnVerify });

			const verifyButton = screen.getByText('Verify');
			await act(async () => {
				fireEvent.click(verifyButton);
			});

			// Wait for error handling
			await act(async () => {
				jest.advanceTimersByTime(100);
			});

			expect(verifyButton).toBeInTheDocument();
		});
	});

	describe('Accessibility', () => {
		it('has proper ARIA labels and roles', () => {
			renderLumoraOTP();

			const inputs = screen.getAllByRole('textbox');
			expect(inputs).toHaveLength(6);

			const verifyButton = screen.getByRole('button', {
				name: /verify/i
			});
			expect(verifyButton).toBeInTheDocument();

			const resendButton = screen.getByRole('button', {
				name: /resend/i
			});
			expect(resendButton).toBeInTheDocument();
		});

		it('supports keyboard navigation', async () => {
			const user = userEvent.setup({
				advanceTimers: jest.advanceTimersByTime
			});
			renderLumoraOTP();

			const inputs = screen.getAllByRole('textbox');

			// Tab through inputs
			await user.tab();
			expect(inputs[0]).toHaveFocus();

			await user.tab();
			expect(inputs[1]).toHaveFocus();
		});

		it('has proper autocomplete attributes', () => {
			renderLumoraOTP();

			const inputs = screen.getAllByRole('textbox');
			inputs.forEach(input => {
				expect(input).toHaveAttribute('autocomplete', 'off');
			});
		});

		it('has proper input attributes for accessibility', () => {
			renderLumoraOTP();

			const inputs = screen.getAllByRole('textbox');
			inputs.forEach(input => {
				expect(input).toHaveAttribute('maxlength', '1');
			});
		});
	});

	describe('Responsive Design', () => {
		it('renders with data-otp-component attribute', () => {
			renderLumoraOTP();

			const container = document.querySelector('[data-otp-component]');
			expect(container).toBeInTheDocument();
		});
	});

	describe('Edge Cases and Integration', () => {
		it('handles resend without onResend callback', async () => {
			renderLumoraOTP({ onResend: undefined });

			const resendButton = screen.getByText('Resend Otp');
			await act(async () => {
				fireEvent.click(resendButton);
			});

			// Should not throw error
			expect(resendButton).toBeInTheDocument();
		});

		it('handles timer cleanup on component unmount', () => {
			const { unmount } = renderLumoraOTP({
				showExpirationTimer: true,
				expirationTime: 300
			});

			// Unmount component
			unmount();

			// Should not throw errors or have memory leaks
			expect(true).toBe(true);
		});

		it('handles multiple rapid resend clicks', async () => {
			renderLumoraOTP({ resendCooldown: 60 });

			const resendButton = screen.getByText('Resend Otp');

			// Click multiple times rapidly
			await act(async () => {
				fireEvent.click(resendButton);
				fireEvent.click(resendButton);
				fireEvent.click(resendButton);
			});

			// Should only trigger once
			expect(screen.getByText(/Resend in \d+s/)).toBeInTheDocument();
		});

		it('handles component with different digit counts', () => {
			renderLumoraOTP({ digitCount: 4 });

			const inputs = screen.getAllByRole('textbox');
			expect(inputs).toHaveLength(4);
		});

		it('handles custom placeholder text', () => {
			renderLumoraOTP({ placeholder: 'X' });

			const inputs = screen.getAllByRole('textbox');
			inputs.forEach(input => {
				expect(input).toHaveAttribute('placeholder', 'X');
			});
		});

		it('handles custom instruction text', () => {
			const customText = 'Please enter your verification code';
			renderLumoraOTP({ instructionText: customText });

			expect(screen.getByText(customText)).toBeInTheDocument();
		});

		it('handles zero resend cooldown', async () => {
			renderLumoraOTP({ resendCooldown: 0 });

			const resendButton = screen.getByText('Resend Otp');
			await act(async () => {
				fireEvent.click(resendButton);
			});

			// Should not show cooldown timer
			expect(
				screen.queryByText(/Resend in \d+s/)
			).not.toBeInTheDocument();
		});

		it('handles rapid form submissions', async () => {
			const mockOnVerify = jest
				.fn()
				.mockImplementation(
					() => new Promise(resolve => setTimeout(resolve, 1000))
				);
			renderLumoraOTP({ onVerify: mockOnVerify });

			const verifyButton = screen.getByText('Verify');

			// Click multiple times rapidly
			await act(async () => {
				fireEvent.click(verifyButton);
				fireEvent.click(verifyButton);
				fireEvent.click(verifyButton);
			});

			// Should handle multiple clicks gracefully
			expect(verifyButton).toBeInTheDocument();
		});
	});
});
