export interface LumoraOTPProps {
    /** Number of OTP digits (e.g., 4 or 6). Defaults to 6. */
    digitCount?: number;
    /** Callback function executed to verify the entered OTP. Returns a promise for async handling. */
    onVerify: (otp: string) => Promise<any>;
    /** Callback executed on successful verification. */
    onVerifySuccess: (response: any) => void;
    /** Callback executed on failed verification. */
    onVerifyError: (error: Error) => void;
    /** If true, displays a 'Resend OTP' button. Defaults to true. */
    showResend?: boolean;
    /** Callback to handle resending OTP. */
    onResend?: () => void;
    /** Cooldown time in seconds before resend is available. Defaults to 60. */
    resendCooldown?: number;
    /** OTP expiration time in seconds for displaying a countdown. Defaults to 300. */
    expirationTime?: number;
    /** Custom instruction text to display above the OTP inputs */
    instructionText?: string;
    /** Custom placeholder text for individual input fields */
    placeholder?: string;
    /** Whether to show the expiration timer */
    showExpirationTimer?: boolean;
}
export interface OTPFormData {
    otp: string;
}
export interface TimerState {
    resendCooldown: number;
    expirationTime: number;
}
//# sourceMappingURL=index.d.ts.map