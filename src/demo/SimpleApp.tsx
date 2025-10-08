import React, { useState } from 'react';
import {
	Container,
	Typography,
	Box,
	Paper,
	Grid,
	FormControl,
	FormLabel,
	RadioGroup,
	FormControlLabel,
	Radio,
	TextField,
	Switch,
	Divider,
	Alert,
	Chip,
	Stack
} from '@mui/material';
import LumoraOTP from '../components/LumoraOTP';
import { LumoraOTPProps } from '../types';

// Advanced demo component with configuration options
const SimpleApp: React.FC = () => {
	// Configuration state for the demo
	const [demoConfig, setDemoConfig] = useState({
		digitCount: 6,
		showResend: true,
		resendCooldown: 60,
		expirationTime: 300,
		instructionText: 'Enter the code sent to your email',
		placeholder: '0',
		showExpirationTimer: true
	});

	// State for tracking verification results
	const [verificationResults, setVerificationResults] = useState<any[]>([]);

	// Mock verification function with different test scenarios
	const mockVerify = async (otp: string): Promise<any> => {
		// Simulate API call delay
		await new Promise(resolve => setTimeout(resolve, 1500));

		// Simulate different responses based on OTP
		if (otp === '123456') {
			return {
				success: true,
				message: 'Verification successful!',
				token: 'mock-jwt-token'
			};
		} else if (otp === '000000') {
			throw new Error('Invalid OTP. Please check and try again.');
		} else if (otp === '999999') {
			throw new Error('OTP has expired. Please request a new one.');
		} else {
			throw new Error('Verification failed. Please try again.');
		}
	};

	// Handle successful verification
	const handleVerifySuccess = (response: any) => {
		setVerificationResults(prev => [
			...prev,
			{
				type: 'success',
				message: `✅ ${response.message}`,
				timestamp: new Date().toLocaleTimeString(),
				data: response
			}
		]);
	};

	// Handle verification error
	const handleVerifyError = (error: Error) => {
		setVerificationResults(prev => [
			...prev,
			{
				type: 'error',
				message: `❌ ${error.message}`,
				timestamp: new Date().toLocaleTimeString(),
				error: error.message
			}
		]);
	};

	// Handle resend OTP
	const handleResend = () => {
		setVerificationResults(prev => [
			...prev,
			{
				type: 'info',
				message: '📤 OTP resend requested',
				timestamp: new Date().toLocaleTimeString()
			}
		]);
	};

	// Update configuration for demo
	const updateConfig = (key: keyof typeof demoConfig, value: any) => {
		setDemoConfig(prev => ({ ...prev, [key]: value }));
	};

	// Prepare props for LumoraOTP component
	const lumoraOTPProps: LumoraOTPProps = {
		digitCount: demoConfig.digitCount,
		onVerify: mockVerify,
		onVerifySuccess: handleVerifySuccess,
		onVerifyError: handleVerifyError,
		showResend: demoConfig.showResend,
		onResend: handleResend,
		resendCooldown: demoConfig.resendCooldown,
		expirationTime: demoConfig.expirationTime,
		instructionText: demoConfig.instructionText,
		placeholder: demoConfig.placeholder,
		showExpirationTimer: demoConfig.showExpirationTimer
	};

	return (
		<Container maxWidth="lg" sx={{ py: 4 }}>
			<Box sx={{ textAlign: 'center', mb: 4 }}>
				<Typography variant="h3" component="h1" gutterBottom>
					LumoraOTP Component Demo
				</Typography>
				<Typography variant="h6" color="text.secondary" gutterBottom>
					Comprehensive showcase of all component props and features
				</Typography>
				<Alert severity="info" sx={{ mt: 2, textAlign: 'left' }}>
					<Typography variant="body2">
						<strong>Try these test codes:</strong>
						<br />• <code>123456</code> - Success response
						<br />• <code>000000</code> - Invalid OTP error
						<br />• <code>999999</code> - Expired OTP error
						<br />• Any other code - Generic verification failure
					</Typography>
				</Alert>
			</Box>

			<Grid container spacing={{ xs: 2, md: 4 }}>
				{/* Configuration Panel */}
				<Grid item xs={12} lg={4}>
					<Paper
						sx={{
							p: { xs: 2, sm: 3 },
							height: 'fit-content',
							width: '100%',
							boxSizing: 'border-box'
						}}
					>
						<Typography variant="h5" gutterBottom>
							Configuration
						</Typography>
						<Divider sx={{ mb: 2 }} />

						<Stack spacing={3}>
							{/* Digit Count */}
							<FormControl>
								<FormLabel>Digit Count</FormLabel>
								<RadioGroup
									value={demoConfig.digitCount}
									onChange={e =>
										updateConfig(
											'digitCount',
											parseInt(e.target.value)
										)
									}
								>
									<FormControlLabel
										value={4}
										control={<Radio />}
										label="4 digits"
									/>
									<FormControlLabel
										value={6}
										control={<Radio />}
										label="6 digits"
									/>
									<FormControlLabel
										value={8}
										control={<Radio />}
										label="8 digits"
									/>
								</RadioGroup>
							</FormControl>

							{/* Resend Settings */}
							<Box>
								<FormControlLabel
									control={
										<Switch
											checked={demoConfig.showResend}
											onChange={e =>
												updateConfig(
													'showResend',
													e.target.checked
												)
											}
										/>
									}
									label="Show Resend Button"
								/>
								{demoConfig.showResend && (
									<TextField
										fullWidth
										size="small"
										label="Resend Cooldown (seconds)"
										type="number"
										value={demoConfig.resendCooldown}
										onChange={e =>
											updateConfig(
												'resendCooldown',
												parseInt(e.target.value) || 60
											)
										}
										sx={{ mt: 1 }}
									/>
								)}
							</Box>

							{/* Expiration Settings */}
							<Box>
								<FormControlLabel
									control={
										<Switch
											checked={
												demoConfig.showExpirationTimer
											}
											onChange={e =>
												updateConfig(
													'showExpirationTimer',
													e.target.checked
												)
											}
										/>
									}
									label="Show Expiration Timer"
								/>
								{demoConfig.showExpirationTimer && (
									<TextField
										fullWidth
										size="small"
										label="Expiration Time (seconds)"
										type="number"
										value={demoConfig.expirationTime}
										onChange={e =>
											updateConfig(
												'expirationTime',
												parseInt(e.target.value) || 300
											)
										}
										sx={{ mt: 1 }}
									/>
								)}
							</Box>

							{/* Custom Text */}
							<TextField
								fullWidth
								label="Instruction Text"
								value={demoConfig.instructionText}
								onChange={e =>
									updateConfig(
										'instructionText',
										e.target.value
									)
								}
								multiline
								rows={2}
							/>

							<TextField
								fullWidth
								label="Placeholder"
								value={demoConfig.placeholder}
								onChange={e =>
									updateConfig('placeholder', e.target.value)
								}
							/>
						</Stack>
					</Paper>
				</Grid>

				{/* OTP Component Demo */}
				<Grid item xs={12} lg={4}>
					<Paper
						sx={{
							p: { xs: 2, sm: 3 },
							width: '100%',
							boxSizing: 'border-box'
						}}
					>
						<Typography variant="h5" gutterBottom>
							Live Demo
						</Typography>
						<Divider sx={{ mb: 2 }} />
						<LumoraOTP {...lumoraOTPProps} />
					</Paper>
				</Grid>

				{/* Results Panel */}
				<Grid item xs={12} lg={4}>
					<Paper
						sx={{
							p: { xs: 2, sm: 3 },
							height: 'fit-content',
							width: '100%',
							boxSizing: 'border-box'
						}}
					>
						<Typography variant="h5" gutterBottom>
							Verification Results
						</Typography>
						<Divider sx={{ mb: 2 }} />

						<Box sx={{ maxHeight: 400, overflow: 'auto' }}>
							{verificationResults.length === 0 ? (
								<Typography
									variant="body2"
									color="text.secondary"
								>
									No verification attempts yet. Try entering
									an OTP above!
								</Typography>
							) : (
								<Stack spacing={1}>
									{verificationResults.map(
										(result, index) => {
											const getSeverity = () => {
												if (result.type === 'success')
													return 'success';
												if (result.type === 'error')
													return 'error';
												return 'info';
											};

											return (
												<Box
													key={`${result.timestamp}-${index}`}
												>
													<Chip
														label={result.timestamp}
														size="small"
														variant="outlined"
														sx={{ mb: 0.5 }}
													/>
													<Alert
														severity={getSeverity()}
														sx={{
															fontSize: '0.875rem'
														}}
													>
														{result.message}
													</Alert>
												</Box>
											);
										}
									)}
								</Stack>
							)}
						</Box>
					</Paper>
				</Grid>
			</Grid>

			{/* Props Documentation */}
			<Paper
				sx={{
					p: { xs: 2, sm: 3 },
					mt: 4,
					width: '100%',
					boxSizing: 'border-box'
				}}
			>
				<Typography variant="h5" gutterBottom>
					Available Props
				</Typography>
				<Divider sx={{ mb: 2 }} />
				<Grid container spacing={{ xs: 1, md: 2 }}>
					<Grid item xs={12} md={6}>
						<Typography variant="h6" gutterBottom>
							Required Props
						</Typography>
						<Stack spacing={1}>
							<Box>
								<Typography variant="subtitle2" color="primary">
									onVerify
								</Typography>
								<Typography variant="body2">
									Function to verify the entered OTP
								</Typography>
							</Box>
							<Box>
								<Typography variant="subtitle2" color="primary">
									onVerifySuccess
								</Typography>
								<Typography variant="body2">
									Callback for successful verification
								</Typography>
							</Box>
							<Box>
								<Typography variant="subtitle2" color="primary">
									onVerifyError
								</Typography>
								<Typography variant="body2">
									Callback for verification errors
								</Typography>
							</Box>
						</Stack>
					</Grid>
					<Grid item xs={12} md={6}>
						<Typography variant="h6" gutterBottom>
							Optional Props
						</Typography>
						<Stack spacing={1}>
							<Box>
								<Typography variant="subtitle2">
									digitCount (default: 6)
								</Typography>
								<Typography variant="body2">
									Number of OTP digits
								</Typography>
							</Box>
							<Box>
								<Typography variant="subtitle2">
									showResend (default: true)
								</Typography>
								<Typography variant="body2">
									Show/hide resend button
								</Typography>
							</Box>
							<Box>
								<Typography variant="subtitle2">
									resendCooldown (default: 60)
								</Typography>
								<Typography variant="body2">
									Cooldown time in seconds
								</Typography>
							</Box>
							<Box>
								<Typography variant="subtitle2">
									expirationTime (default: 300)
								</Typography>
								<Typography variant="body2">
									OTP expiration time in seconds
								</Typography>
							</Box>
							<Box>
								<Typography variant="subtitle2">
									instructionText
								</Typography>
								<Typography variant="body2">
									Custom instruction text
								</Typography>
							</Box>
							<Box>
								<Typography variant="subtitle2">
									placeholder (default: "0")
								</Typography>
								<Typography variant="body2">
									Input field placeholder
								</Typography>
							</Box>
							<Box>
								<Typography variant="subtitle2">
									showExpirationTimer (default: true)
								</Typography>
								<Typography variant="body2">
									Show/hide expiration countdown
								</Typography>
							</Box>
						</Stack>
					</Grid>
				</Grid>
			</Paper>
		</Container>
	);
};

// Export the SimpleApp component as default
export default SimpleApp;
