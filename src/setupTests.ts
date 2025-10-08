import '@testing-library/jest-dom';
import * as React from 'react';

// Mock Material-UI theme
const mockTheme = {
	palette: {
		primary: {
			main: '#1976d2'
		},
		error: {
			main: '#d32f2f'
		},
		success: {
			main: '#2e7d32'
		},
		warning: {
			main: '#ed6c02'
		}
	},
	spacing: (value: number) => `${value * 8}px`,
	breakpoints: {
		down: (breakpoint: string) => `@media (max-width: ${breakpoint})`
	}
};

// Mock Material-UI styled function
jest.mock('@mui/material/styles', () => ({
	...jest.requireActual('@mui/material/styles'),
	styled: (component: any) => (styles: any) => component
}));

// Mock Material-UI components
jest.mock('@mui/material', () => ({
	...jest.requireActual('@mui/material'),
	Box: ({ children, sx, ...props }: any) => {
		const { textAlign, gutterBottom, ...domProps } = props;
		return React.createElement('div', domProps, children);
	},
	TextField: ({ inputRef, inputProps, error, ...props }: any) => {
		const { startIcon, ...domProps } = props;
		return React.createElement('input', {
			ref: inputRef,
			...inputProps,
			...domProps
		});
	},
	Button: ({ children, startIcon, ...props }: any) => {
		const { variant, disabled, ...domProps } = props;
		return React.createElement(
			'button',
			{
				disabled,
				...domProps
			},
			children
		);
	},
	Typography: ({ children, textAlign, gutterBottom, ...props }: any) => {
		const { variant, component, ...domProps } = props;
		return React.createElement('div', domProps, children);
	},
	Alert: ({ children, severity, ...props }: any) => {
		const { sx, ...domProps } = props;
		return React.createElement('div', domProps, children);
	},
	CircularProgress: (props: any) => {
		const { size, color, ...domProps } = props;
		return React.createElement('div', domProps, 'Loading...');
	},
	Stack: ({ children, direction, spacing, ...props }: any) => {
		const { sx, ...domProps } = props;
		return React.createElement('div', domProps, children);
	},
	Fade: ({ children, in: inProp }: any) => (inProp ? children : null),
	keyframes: (styles: any) => styles
}));

// Mock clipboard API
Object.assign(navigator, {
	clipboard: {
		readText: jest.fn(),
		writeText: jest.fn()
	}
});

// Mock window.setInterval and clearInterval
global.setInterval = jest.fn();
global.clearInterval = jest.fn();

// Mock window.setTimeout and clearTimeout
global.setTimeout = jest.fn();
global.clearTimeout = jest.fn();
