import React from "react";
import LumoraOTP from "../src/components/LumoraOTP";

/**
 * Basic usage example of LumoraOTP component
 */
const BasicUsageExample: React.FC = () => {
  const handleVerify = async (otp: string) => {
    // Replace with your actual verification API call
    const response = await fetch("/api/verify-otp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ otp }),
    });

    if (!response.ok) {
      throw new Error("Invalid OTP");
    }

    return response.json();
  };

  const handleVerifySuccess = (response: any) => {
    console.log("OTP verified successfully:", response);
    // Handle successful verification (e.g., redirect, show success message)
  };

  const handleVerifyError = (error: Error) => {
    console.error("OTP verification failed:", error.message);
    // Handle verification error (e.g., show error message)
  };

  const handleResend = () => {
    // Replace with your actual resend API call
    fetch("/api/resend-otp", {
      method: "POST",
    });
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
      instructionText="Enter the 6-digit code sent to your email"
    />
  );
};

export default BasicUsageExample;
