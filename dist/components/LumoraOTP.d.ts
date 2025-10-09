import { default as React } from 'react';
import { LumoraOTPProps } from '../types';

/**
 * LumoraOTP - A comprehensive React OTP (One-Time Password) verification component
 *
 * Features:
 * - Configurable digit count (4-6 digits)
 * - Auto-focus progression between input fields
 * - Paste support for filling all fields at once
 * - Resend functionality with cooldown timer
 * - Expiration timer with countdown display
 * - Loading and error states with animations
 * - Responsive design for mobile and desktop
 * - Full TypeScript support
 *
 * @example
 * ```tsx
 * import { LumoraOTP } from '@volenday/lumora-otp-component';
 *
 * const MyComponent = () => {
 *   const handleVerify = async (otp: string) => {
 *     const response = await fetch('/api/verify-otp', {
 *       method: 'POST',
 *       body: JSON.stringify({ otp })
 *     });
 *     return response.json();
 *   };
 *
 *   return (
 *     <LumoraOTP
 *       digitCount={6}
 *       onVerify={handleVerify}
 *       onVerifySuccess={(response) => console.log('Success:', response)}
 *       onVerifyError={(error) => console.error('Error:', error)}
 *       showResend={true}
 *       onResend={() => console.log('Resending...')}
 *       resendCooldown={60}
 *       expirationTime={300}
 *     />
 *   );
 * };
 * ```
 */
declare const LumoraOTP: React.FC<LumoraOTPProps>;
export default LumoraOTP;
//# sourceMappingURL=LumoraOTP.d.ts.map