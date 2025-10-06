# PRD: Nova OTP Component

## Objective

Create a standardized, reusable, private React OTP (One-Time Password) verification component for internal use, published to GitHub Packages. This component provides a flexible, form-managed interface for handling OTP input and verification, suitable for scenarios such as two-factor authentication (2FA), email verification, or other security flows that typically follow initial login processes.

## Core Requirements & Tech Stack

- **Component Name:** LumoraOTP
- **Package Type:** Private NPM Package for GitHub Packages.
- **Language:** TypeScript
- **Framework:** ReactJS
- **UI Libraries:** MUI & MUI Joy UI
- **Form Library:** react-hook-form (Used for managing form state, input validation, and handling submissions across all input fields.)

## Feature Checklist

The component MUST support the following features:

- **Input Handling:**
  - Multiple input fields (e.g., 4-6 digits) with auto-focus progression (e.g., move to next field on input).
  - Paste support to fill all fields at once.
  - Numeric input only, with validation enforced via react-hook-form (e.g., required fields, pattern matching for digits).
  - Integration with **react-hook-form** for seamless form registration, error handling, and value collection.
- **Submission:**
  - Submit button to verify the OTP, triggered via react-hook-form's handleSubmit.
  - Optional resend OTP button with cooldown timer.
- **Responsiveness:**
  - Fully responsive layout, with fields stacking or resizing on smaller screens (leveraging MUI's responsive utilities).
- **Additional UX:**
  - Loading indicator during verification.
  - Display timer for OTP expiration (configurable).

## Component API (Props)

The component's behavior MUST be configured via the following props:

- **digitCount:** number - Number of OTP digits (e.g., 4 or 6). Defaults to 6.
- **onVerify:** (otp: string) => Promise<any> - Callback function executed to verify the entered OTP. Returns a promise for async handling.
- **onVerifySuccess:** (response: any) => void - Callback executed on successful verification.
- **onVerifyError:** (error: Error) => void - Callback executed on failed verification.
- **showResend?:** boolean - If true, displays a "Resend OTP" button. Defaults to true.
- **onResend?:** () => void - Callback to handle resending OTP.
- **resendCooldown?:** number - Cooldown time in seconds before resend is available. Defaults to 60.
- **expirationTime?:** number - OTP expiration time in seconds for displaying a countdown. Defaults to 300.

## Component States & UX

The component MUST visually represent the following states.

- **Default State:** Row of input fields (e.g., 6 boxes) with instructions (e.g., "Enter the code sent to your email"). Resend button if enabled. Responsive to fit on mobile.
- **Input State:** Auto-focus on first field, progress to next on digit entry. Handle backspace to previous field. Real-time validation errors displayed via react-hook-form (e.g., "Invalid digit").
- **Loading State:** Disable inputs and buttons, show progress indicator (e.g., "Verifying...").
- **Success State:** Handled via onVerifySuccess; may show a checkmark briefly before any parent redirection.
- **Error State:** Shake animation on fields or error message (e.g., "Invalid code"). Clear fields for retry. Use MUI Alert for errors, integrated with react-hook-form's error state.

## Constraints & Non-Goals

The component WILL NOT contain any backend-specific logic. It will provide data to the parent application via callbacks for actual authentication/verification.

- **Non-Goal:** Integration with specific auth libraries (e.g., Firebase); callbacks allow flexibility.
- **Non-Goal:** Advanced security features like biometric auth or captcha are out of scope.
- **Non-Goal:** This is a single-purpose component, not a full auth flow UI.
