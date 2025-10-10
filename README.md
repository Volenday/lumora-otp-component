# Lumora OTP Component

A modern, reusable React OTP (One-Time Password) verification component built with TypeScript, Material-UI, and React Hook Form.

## Features

-   🔢 **Configurable digit count** (4, 6, or any number)
-   📱 **Responsive design** with mobile-first approach
-   ⏰ **Built-in timers** for resend cooldown and expiration
-   📋 **Clipboard support** for easy OTP pasting
-   🎨 **Material-UI integration** with custom styling
-   🔄 **Auto-focus** and keyboard navigation
-   ✅ **Form validation** with React Hook Form
-   🎭 **Shake animation** for error feedback
-   📦 **TypeScript support** with full type definitions

## Installation

### From Git Repository

```bash
npm install git+https://github.com/Volenday/lumora-otp-component.git
```

### Peer Dependencies

Make sure you have the required peer dependencies installed:

```bash
npm install react react-dom @mui/material @emotion/react @emotion/styled react-hook-form
```

## Usage

### Basic Usage

```tsx
import React from 'react';
import { LumoraOTP } from '@volenday/lumora-otp-component';

const App = () => {
	const handleVerify = async (otp: string) => {
		// Your verification logic here
		console.log('Verifying OTP:', otp);

		// Simulate API call
		await new Promise(resolve => setTimeout(resolve, 1000));

		// Return success response or throw error
		if (otp === '123456') {
			return { success: true, message: 'OTP verified successfully' };
		} else {
			throw new Error('Invalid OTP');
		}
	};

	const handleVerifySuccess = (response: any) => {
		console.log('Verification successful:', response);
		// Handle successful verification
	};

	const handleVerifyError = (error: Error) => {
		console.error('Verification failed:', error);
		// Handle verification error
	};

	const handleResend = () => {
		console.log('Resending OTP...');
		// Your resend logic here
	};

	return (
		<LumoraOTP
			digitCount={6}
			onVerify={handleVerify}
			onVerifySuccess={handleVerifySuccess}
			onVerifyError={handleVerifyError}
			onResend={handleResend}
			instructionText="Enter the 6-digit code sent to your email"
			showResend={true}
			resendCooldown={60}
			expirationTime={300}
			showExpirationTimer={true}
		/>
	);
};

export default App;
```

### Advanced Usage

```tsx
import React from 'react';
import { LumoraOTP, LumoraOTPProps } from '@volenday/lumora-otp-component';

const CustomOTPPage = () => {
	const handleVerify = async (otp: string) => {
		const response = await fetch('/api/verify-otp', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ otp })
		});

		if (!response.ok) {
			throw new Error('Verification failed');
		}

		return response.json();
	};

	const handleVerifySuccess = (response: any) => {
		// Redirect to dashboard or show success message
		window.location.href = '/dashboard';
	};

	const handleVerifyError = (error: Error) => {
		// Show error toast or handle error
		console.error('OTP verification failed:', error.message);
	};

	const handleResend = async () => {
		try {
			await fetch('/api/resend-otp', { method: 'POST' });
			console.log('OTP resent successfully');
		} catch (error) {
			console.error('Failed to resend OTP:', error);
		}
	};

	return (
		<div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
			<LumoraOTP
				digitCount={4}
				onVerify={handleVerify}
				onVerifySuccess={handleVerifySuccess}
				onVerifyError={handleVerifyError}
				onResend={handleResend}
				instructionText="Enter the 4-digit code from your authenticator app"
				placeholder="•"
				showResend={true}
				resendCooldown={30}
				expirationTime={120}
				showExpirationTimer={true}
			/>
		</div>
	);
};

export default CustomOTPPage;
```

## Props

| Prop                  | Type                            | Default                               | Description                                         |
| --------------------- | ------------------------------- | ------------------------------------- | --------------------------------------------------- |
| `digitCount`          | `number`                        | `6`                                   | Number of OTP digits                                |
| `onVerify`            | `(otp: string) => Promise<any>` | **Required**                          | Function to verify the OTP                          |
| `onVerifySuccess`     | `(response: any) => void`       | **Required**                          | Callback for successful verification                |
| `onVerifyError`       | `(error: Error) => void`        | **Required**                          | Callback for failed verification                    |
| `showResend`          | `boolean`                       | `true`                                | Whether to show the resend button                   |
| `onResend`            | `() => void`                    | `undefined`                           | Callback for resend action                          |
| `resendCooldown`      | `number`                        | `60`                                  | Cooldown time in seconds before resend is available |
| `expirationTime`      | `number`                        | `300`                                 | OTP expiration time in seconds                      |
| `instructionText`     | `string`                        | `'Enter the code sent to your email'` | Instruction text above inputs                       |
| `placeholder`         | `string`                        | `'0'`                                 | Placeholder for individual input fields             |
| `showExpirationTimer` | `boolean`                       | `true`                                | Whether to show the expiration countdown            |

## Types

```typescript
interface LumoraOTPProps {
	digitCount?: number;
	onVerify: (otp: string) => Promise<any>;
	onVerifySuccess: (response: any) => void;
	onVerifyError: (error: Error) => void;
	showResend?: boolean;
	onResend?: () => void;
	resendCooldown?: number;
	expirationTime?: number;
	instructionText?: string;
	placeholder?: string;
	showExpirationTimer?: boolean;
}

interface OTPFormData {
	otp: string;
}

interface TimerState {
	resendCooldown: number;
	expirationTime: number;
}
```

## Features in Detail

### Clipboard Support

-   Automatically detects when OTP is pasted from clipboard
-   Validates pasted OTP length matches expected digit count
-   Auto-fills all input fields and focuses appropriately

### Responsive Design

-   Mobile-first approach with breakpoints for different screen sizes
-   Input fields resize based on screen size
-   Button layout adapts to mobile screens

### Keyboard Navigation

-   Auto-focus to next field when typing
-   Backspace moves to previous field when current is empty
-   Tab navigation support

### Error Handling

-   Shake animation for invalid inputs
-   Clear error messages
-   Form validation with React Hook Form

### Timer Management

-   Resend cooldown timer
-   OTP expiration countdown
-   Visual feedback for timer states

## Browser Support

-   Chrome 60+
-   Firefox 55+
-   Safari 12+
-   Edge 79+

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build library
npm run build

# Run tests
npm test

# Type checking
npm run type-check
```

## License

UNLICENSED - For internal use only.

## Support

For issues and questions, please contact the development team.
