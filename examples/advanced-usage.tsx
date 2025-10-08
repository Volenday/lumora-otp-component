import React, { useState } from 'react';
import LumoraOTP from '../src/components/LumoraOTP';
import { Box, Typography, Alert } from '@mui/material';

/**
 * Advanced usage example with custom configuration and state management
 */
const AdvancedUsageExample: React.FC = () => {
	const [verificationAttempts, setVerificationAttempts] = useState(0);
	const [isBlocked, setIsBlocked] = useState(false);

	const handleVerify = async (otp: string) => {
		// Simulate API call with different responses based on attempts
		await new Promise(resolve => setTimeout(resolve, 1500));

		// Block after 3 attempts
		if (verificationAttempts >= 2) {
			setIsBlocked(true);
			throw new Error('Too many attempts. Please try again later.');
		}

		// Simulate different OTP validation
		if (otp === '123456') {
			return { success: true, message: 'Verification successful!' };
		} else {
			setVerificationAttempts(prev => prev + 1);
			throw new Error(
				`Invalid OTP. ${2 - verificationAttempts} attempts remaining.`
			);
		}
	};

	const handleVerifySuccess = (response: any) => {
		console.log('Verification successful:', response);
		// Reset attempts on success
		setVerificationAttempts(0);
	};

	const handleVerifyError = (error: Error) => {
		console.error('Verification failed:', error.message);
	};

	const handleResend = () => {
		// Reset attempts when resending
		setVerificationAttempts(0);
		setIsBlocked(false);
		console.log('Resending OTP...');
	};

	if (isBlocked) {
		return (
			<Box sx={{ textAlign: 'center', p: 3 }}>
				<Alert severity="error" sx={{ mb: 2 }}>
					Too many failed attempts. Please try again later.
				</Alert>
				<Typography variant="body2" color="text.secondary">
					Contact support if you continue to have issues.
				</Typography>
			</Box>
		);
	}

	return (
		<Box>
			<Typography variant="h6" gutterBottom>
				Advanced OTP Verification
			</Typography>

			{verificationAttempts > 0 && (
				<Alert severity="warning" sx={{ mb: 2 }}>
					{verificationAttempts} failed attempt(s).{' '}
					{3 - verificationAttempts} remaining.
				</Alert>
			)}

			<LumoraOTP
				digitCount={4}
				onVerify={handleVerify}
				onVerifySuccess={handleVerifySuccess}
				onVerifyError={handleVerifyError}
				showResend={true}
				onResend={handleResend}
				resendCooldown={30}
				expirationTime={180}
				instructionText="Enter the 4-digit code sent to your phone"
				placeholder="•"
				showExpirationTimer={true}
			/>
		</Box>
	);
};

export default AdvancedUsageExample;
