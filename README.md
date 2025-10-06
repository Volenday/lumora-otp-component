# LumoraOTP Component

A reusable React OTP (One-Time Password) verification component for internal use, built with TypeScript, React, MUI, and react-hook-form.

## Features

- ✅ Multiple input fields with auto-focus progression
- ✅ Paste support to fill all fields at once
- ✅ Numeric input validation with react-hook-form
- ✅ Submit and resend functionality with cooldown timers
- ✅ Loading and error states with animations
- ✅ Responsive design for mobile and desktop
- ✅ Configurable digit count (4-6 digits)
- ✅ Expiration timer with countdown
- ✅ TypeScript support with full type definitions

## Installation

### Using GitHub Packages

First, configure npm to use GitHub Packages for the `@volenday` scope:

```bash
# Create or update .npmrc file in your project root
echo "@volenday:registry=https://npm.pkg.github.com" >> .npmrc
echo "//npm.pkg.github.com/:_authToken=\${GITHUB_TOKEN}" >> .npmrc
```

Then install the package:

```bash
npm install @volenday/lumora-otp
```

**Note:** You'll need a GitHub Personal Access Token with `packages:read` permission. Set it as an environment variable:

```bash
export GITHUB_TOKEN=your_github_token_here
```

## Usage

```tsx
import React from "react";
import { LumoraOTP } from "@volenday/lumora-otp";

const MyComponent = () => {
  const handleVerify = async (otp: string) => {
    // Your verification logic here
    const response = await fetch("/api/verify-otp", {
      method: "POST",
      body: JSON.stringify({ otp }),
    });

    if (!response.ok) {
      throw new Error("Invalid OTP");
    }

    return response.json();
  };

  const handleVerifySuccess = (response: any) => {
    console.log("OTP verified successfully:", response);
    // Handle successful verification
  };

  const handleVerifyError = (error: Error) => {
    console.error("OTP verification failed:", error.message);
    // Handle verification error
  };

  const handleResend = () => {
    // Your resend logic here
    console.log("Resending OTP...");
  };

  return (
    <LumoraOTP
      digitCount={6}
      onVerify={handleVerify}
      onVerifySuccess={handleVerifySuccess}
      onVerifyError={handleVerifyError}
      showResend={true}
      onResend={handleResend}
      resendCooldown={60}
      expirationTime={300}
      instructionText="Enter the code sent to your email"
    />
  );
};
```

## Props

| Prop                  | Type                            | Default                               | Description                                         |
| --------------------- | ------------------------------- | ------------------------------------- | --------------------------------------------------- |
| `digitCount`          | `number`                        | `6`                                   | Number of OTP digits (4-6)                          |
| `onVerify`            | `(otp: string) => Promise<any>` | **Required**                          | Callback function to verify the OTP                 |
| `onVerifySuccess`     | `(response: any) => void`       | **Required**                          | Callback executed on successful verification        |
| `onVerifyError`       | `(error: Error) => void`        | **Required**                          | Callback executed on failed verification            |
| `showResend`          | `boolean`                       | `true`                                | Whether to show the resend button                   |
| `onResend`            | `() => void`                    | -                                     | Callback to handle resending OTP                    |
| `resendCooldown`      | `number`                        | `60`                                  | Cooldown time in seconds before resend is available |
| `expirationTime`      | `number`                        | `300`                                 | OTP expiration time in seconds                      |
| `instructionText`     | `string`                        | `"Enter the code sent to your email"` | Custom instruction text                             |
| `placeholder`         | `string`                        | `"0"`                                 | Placeholder text for input fields                   |
| `showExpirationTimer` | `boolean`                       | `true`                                | Whether to show the expiration timer                |

## Component States

### Default State

- Row of input fields with instructions
- Resend button (if enabled)
- Responsive layout

### Input State

- Auto-focus on first field
- Progress to next field on digit entry
- Handle backspace to previous field
- Real-time validation errors

### Loading State

- Disabled inputs and buttons
- Progress indicator during verification

### Success State

- Handled via `onVerifySuccess` callback
- May show success message briefly

### Error State

- Shake animation on fields
- Error message display
- Clear fields for retry

## Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Type checking
npm run type-check

# Linting
npm run lint
```

### Demo

Run the development server to see the component in action:

```bash
npm run dev
```

The demo includes:

- Interactive OTP input (try entering "123456" for success)
- All component features and states
- Responsive design testing

## Publishing

This package is configured for publishing to GitHub Packages:

```bash
# Build the package
npm run build

# Publish to GitHub Packages
npm publish
```

### Prerequisites for Publishing

1. **GitHub Personal Access Token**: Create a token with `packages:write` permission
2. **Authentication**: Set your GitHub token as an environment variable:
   ```bash
   export GITHUB_TOKEN=your_github_token_here
   ```
3. **Login**: Authenticate with GitHub Packages:
   ```bash
   npm login --scope=@nova --registry=https://npm.pkg.github.com
   ```

### Automated Publishing

The package includes a GitHub Actions workflow for automated publishing on version tags. Simply create a new release or push a version tag to trigger the publish process.

## Dependencies

- React 18+
- @mui/material
- @mui/joy
- react-hook-form
- TypeScript

## License

UNLICENSED - For internal use only.
