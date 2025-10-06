import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline, Container, Typography, Box, Alert } from "@mui/material";
import LumoraOTP from "../components/LumoraOTP";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
  },
});

const App: React.FC = () => {
  const [verificationResult, setVerificationResult] = useState<string | null>(
    null
  );
  const [isSuccess, setIsSuccess] = useState(false);

  // Mock verification function
  const handleVerify = async (
    otp: string
  ): Promise<{ success: boolean; message: string }> => {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Mock verification logic - accept "123456" as valid
    if (otp === "123456") {
      return { success: true, message: "OTP verified successfully!" };
    } else {
      throw new Error("Invalid OTP. Please try again.");
    }
  };

  const handleVerifySuccess = (response: any) => {
    setVerificationResult(response.message);
    setIsSuccess(true);
  };

  const handleVerifyError = (error: Error) => {
    setVerificationResult(error.message);
    setIsSuccess(false);
  };

  const handleResend = () => {
    console.log("Resending OTP...");
    setVerificationResult(null);
    setIsSuccess(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="sm" sx={{ py: 4 }}>
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            LumoraOTP Component Demo
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Try entering the OTP: <strong>123456</strong> (or any other code to
            see error handling)
          </Typography>
        </Box>

        <LumoraOTP
          digitCount={6}
          onVerify={handleVerify}
          onVerifySuccess={handleVerifySuccess}
          onVerifyError={handleVerifyError}
          showResend={true}
          onResend={handleResend}
          resendCooldown={30}
          expirationTime={300}
          instructionText="Enter the 6-digit code sent to your email"
          showExpirationTimer={true}
        />

        {verificationResult && (
          <Box sx={{ mt: 3 }}>
            <Alert severity={isSuccess ? "success" : "error"}>
              {verificationResult}
            </Alert>
          </Box>
        )}

        <Box sx={{ mt: 4, p: 2, bgcolor: "grey.50", borderRadius: 1 }}>
          <Typography variant="h6" gutterBottom>
            Features Demonstrated:
          </Typography>
          <Typography variant="body2" component="ul" sx={{ pl: 2 }}>
            <li>Auto-focus progression between input fields</li>
            <li>Paste support for filling all fields at once</li>
            <li>Numeric input validation</li>
            <li>Loading state during verification</li>
            <li>Error handling with shake animation</li>
            <li>Resend functionality with cooldown timer</li>
            <li>Expiration timer countdown</li>
            <li>Responsive design for mobile devices</li>
            <li>Form validation using react-hook-form</li>
          </Typography>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default App;
