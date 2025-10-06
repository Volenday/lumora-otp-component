import React, { useState, useEffect, useRef, useCallback } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Box,
  TextField,
  Button,
  Typography,
  Alert,
  CircularProgress,
  Stack,
  Fade,
  keyframes,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { LumoraOTPProps, OTPFormData } from "../types";

// Animation keyframes
const shakeAnimation = keyframes`
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-2px); }
  20%, 40%, 60%, 80% { transform: translateX(2px); }
`;

const StyledOTPContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing(3),
  padding: theme.spacing(3),
  width: "100%",
  maxWidth: "100%",
  boxSizing: "border-box",
  "&.shake": {
    animation: `${shakeAnimation} 0.5s ease-in-out`,
  },
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2),
    gap: theme.spacing(2),
  },
  [theme.breakpoints.down("xs")]: {
    padding: theme.spacing(1),
    gap: theme.spacing(1.5),
  },
}));

const StyledInputContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(1),
  justifyContent: "center",
  flexWrap: "nowrap",
  width: "100%",
  maxWidth: "100%",
  padding: theme.spacing(0, 1),
  [theme.breakpoints.down("sm")]: {
    gap: theme.spacing(0.5),
    padding: theme.spacing(0, 0.5),
  },
  [theme.breakpoints.down("xs")]: {
    gap: theme.spacing(0.25),
    padding: theme.spacing(0, 0.25),
  },
}));

const StyledOTPInput = styled(TextField)(({ theme }) => ({
  flex: "1 1 0",
  minWidth: "32px",
  maxWidth: "48px",
  height: "56px",
  "& .MuiOutlinedInput-root": {
    height: "56px",
    textAlign: "center",
    fontSize: "1.5rem",
    fontWeight: 600,
    "& input": {
      padding: theme.spacing(1),
      textAlign: "center",
    },
  },
  [theme.breakpoints.down("sm")]: {
    minWidth: "28px",
    maxWidth: "36px",
    height: "44px",
    "& .MuiOutlinedInput-root": {
      height: "44px",
      fontSize: "1.1rem",
      "& input": {
        padding: theme.spacing(0.5),
      },
    },
  },
  [theme.breakpoints.down("xs")]: {
    minWidth: "24px",
    maxWidth: "32px",
    height: "40px",
    "& .MuiOutlinedInput-root": {
      height: "40px",
      fontSize: "1rem",
      "& input": {
        padding: theme.spacing(0.25),
      },
    },
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  width: "100%",
  maxWidth: "140px",
  height: "44px", // Increased height to accommodate circular progress
  whiteSpace: "nowrap", // Prevent text wrapping
  overflow: "visible", // Allow circular progress to be visible
  textOverflow: "ellipsis", // Show ellipsis if text is too long
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textTransform: "none", // Override Material-UI's default uppercase transform
  "& .MuiButton-startIcon": {
    marginRight: theme.spacing(1),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "visible", // Ensure the icon container doesn't clip content
  },
  "& .MuiCircularProgress-root": {
    overflow: "visible", // Ensure circular progress is not clipped
  },
  [theme.breakpoints.down("sm")]: {
    maxWidth: "120px",
    fontSize: "0.875rem",
    padding: theme.spacing(1, 1.5),
    height: "40px", // Increased height for mobile too
  },
  [theme.breakpoints.down("xs")]: {
    maxWidth: "100%",
    fontSize: "0.8rem",
    padding: theme.spacing(0.75, 1),
    height: "36px", // Increased height for extra small screens
  },
}));

const LumoraOTP: React.FC<LumoraOTPProps> = ({
  digitCount = 6,
  onVerify,
  onVerifySuccess,
  onVerifyError,
  showResend = true,
  onResend,
  resendCooldown = 60,
  expirationTime = 300,
  instructionText = "Enter the code sent to your email",
  placeholder = "0",
  showExpirationTimer = true,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [shake, setShake] = useState(false);
  const [resendTimer, setResendTimer] = useState(0);
  const [expirationTimer, setExpirationTimer] = useState(expirationTime);
  const [isExpired, setIsExpired] = useState(false);

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const { control, handleSubmit, setValue, getValues, clearErrors, reset } =
    useForm<OTPFormData>({
      defaultValues: {
        otp: "",
      },
    });

  // Handle clipboard paste
  const handlePasteFromClipboard = useCallback(async () => {
    try {
      if (!navigator.clipboard) {
        setError("Clipboard access not supported in this browser");
        return;
      }

      const clipboardText = await navigator.clipboard.readText();
      const pastedDigits = clipboardText.replace(/\D/g, ""); // Remove non-numeric characters

      if (pastedDigits.length === 0) {
        setError("No valid OTP found in clipboard");
        return;
      }

      if (pastedDigits.length < digitCount) {
        setError(
          `OTP in clipboard is too short. Expected ${digitCount} digits, got ${pastedDigits.length}`
        );
        return;
      }

      // Use the existing paste logic
      const currentOtp = getValues("otp") || "";
      const newOtp = currentOtp.split("");

      for (let i = 0; i < Math.min(pastedDigits.length, digitCount); i++) {
        newOtp[i] = pastedDigits[i];
        if (inputRefs.current[i]) {
          inputRefs.current[i]!.value = pastedDigits[i];
        }
      }

      const finalOtp = newOtp.join("");
      setValue("otp", finalOtp);

      // Clear any previous errors
      clearErrors("otp");
      setError(null);
      setSuccess(null);

      // Focus on the last filled field or the last field
      const nextIndex = Math.min(pastedDigits.length, digitCount - 1);
      const nextInput = inputRefs.current[nextIndex];
      if (nextInput) {
        nextInput.focus();
      }

      // Show success message
      setSuccess("OTP pasted successfully!");
      setTimeout(() => setSuccess(null), 2000);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to read from clipboard";
      setError(errorMessage);
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  }, [digitCount, getValues, setValue, clearErrors]);

  // Global paste event listener
  useEffect(() => {
    const handleGlobalPaste = (event: ClipboardEvent) => {
      // Check if the paste event is happening within our OTP component
      const target = event.target as HTMLElement;
      const isWithinOTPComponent =
        target.closest("[data-otp-component]") !== null;

      // Only handle paste if it's within our component or if no input is focused
      const activeElement = document.activeElement;
      const isInputFocused = activeElement && activeElement.tagName === "INPUT";

      if (isWithinOTPComponent || !isInputFocused) {
        event.preventDefault();
        handlePasteFromClipboard();
      }
    };

    document.addEventListener("paste", handleGlobalPaste);
    return () => document.removeEventListener("paste", handleGlobalPaste);
  }, [handlePasteFromClipboard]);

  // Timer effects
  useEffect(() => {
    let interval: number;
    if (resendTimer > 0) {
      interval = window.setInterval(() => {
        setResendTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [resendTimer]);

  useEffect(() => {
    let interval: number;
    if (expirationTimer > 0 && showExpirationTimer) {
      interval = window.setInterval(() => {
        setExpirationTimer((prev) => {
          if (prev <= 1) {
            setIsExpired(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [expirationTimer, showExpirationTimer]);

  // Format time for display
  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  // Handle paste scenario
  const handlePasteInput = useCallback(
    (pastedDigits: string, onChange: (value: string) => void) => {
      const currentOtp = getValues("otp") || "";
      const newOtp = currentOtp.split("");

      for (let i = 0; i < pastedDigits.length && i < digitCount; i++) {
        newOtp[i] = pastedDigits[i];
        if (inputRefs.current[i]) {
          inputRefs.current[i]!.value = pastedDigits[i];
        }
      }

      const finalOtp = newOtp.join("");
      setValue("otp", finalOtp);
      onChange(finalOtp);

      // Focus on the next empty field or the last field
      const nextIndex = Math.min(pastedDigits.length, digitCount - 1);
      const nextInput = inputRefs.current[nextIndex];
      if (nextInput) {
        nextInput.focus();
      }
    },
    [digitCount, getValues, setValue]
  );

  // Handle single digit input
  const handleSingleDigitInput = useCallback(
    (
      index: number,
      numericValue: string,
      onChange: (value: string) => void
    ) => {
      const currentOtp = getValues("otp") || "";
      const newOtp = currentOtp.split("");
      newOtp[index] = numericValue;

      const finalOtp = newOtp.join("");
      setValue("otp", finalOtp);
      onChange(finalOtp);

      // Auto-focus to next field
      if (numericValue && index < digitCount - 1) {
        const nextInput = inputRefs.current[index + 1];
        if (nextInput) {
          nextInput.focus();
        }
      }
    },
    [digitCount, getValues, setValue]
  );

  // Handle input change and auto-focus
  const handleInputChange = useCallback(
    (index: number, value: string, onChange: (value: string) => void) => {
      // Only allow numeric input
      const numericValue = value.replace(/\D/g, "");

      if (numericValue.length > 1) {
        // Handle paste scenario
        const pastedDigits = numericValue.slice(0, digitCount);
        handlePasteInput(pastedDigits, onChange);
      } else {
        // Single digit input
        handleSingleDigitInput(index, numericValue, onChange);
      }

      clearErrors("otp");
      setError(null);
      setSuccess(null);
    },
    [digitCount, clearErrors, handlePasteInput, handleSingleDigitInput]
  );

  // Handle backspace
  const handleKeyDown = useCallback(
    (index: number, event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Backspace") {
        const currentOtp = getValues("otp") || "";
        const newOtp = currentOtp.split("");

        if (newOtp[index]) {
          // Clear current field
          newOtp[index] = "";
        } else if (index > 0) {
          // Move to previous field and clear it
          newOtp[index - 1] = "";
          const prevInput = inputRefs.current[index - 1];
          if (prevInput) {
            prevInput.focus();
          }
        }

        const finalOtp = newOtp.join("");
        setValue("otp", finalOtp);
      }
    },
    [getValues, setValue]
  );

  // Handle form submission
  const onSubmit = async (data: OTPFormData) => {
    if (isExpired) {
      setError("OTP has expired. Please request a new one.");
      return;
    }

    const otpValue = data.otp || "";
    if (otpValue.length !== digitCount) {
      setError(`Please enter all ${digitCount} digits.`);
      setShake(true);
      setTimeout(() => setShake(false), 500);
      return;
    }

    setIsLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await onVerify(otpValue);
      setSuccess("Verification successful!");
      setError(null);

      // Show success notification for 2 seconds before calling the callback
      setTimeout(() => {
        onVerifySuccess(response);
      }, 2000);
    } catch (err) {
      const errorMessage =
        err instanceof Error
          ? err.message
          : "Verification failed. Please try again.";
      setError(errorMessage);
      setSuccess(null);
      setShake(true);
      setTimeout(() => setShake(false), 500);
      onVerifyError(err instanceof Error ? err : new Error(errorMessage));
    } finally {
      setIsLoading(false);
    }
  };

  // Handle resend
  const handleResend = () => {
    if (resendTimer > 0) return;

    setResendTimer(resendCooldown);
    setExpirationTimer(expirationTime);
    setIsExpired(false);
    reset();
    setError(null);
    setSuccess(null);
    clearErrors();

    if (onResend) {
      onResend();
    }

    // Focus on first input
    const firstInput = inputRefs.current[0];
    if (firstInput) {
      firstInput.focus();
    }
  };

  return (
    <StyledOTPContainer className={shake ? "shake" : ""} data-otp-component>
      <Typography variant="h6" component="h2" textAlign="center" gutterBottom>
        {instructionText}
      </Typography>

      {showExpirationTimer && expirationTimer > 0 && (
        <Typography variant="body2" color="text.secondary">
          Code expires in: {formatTime(expirationTimer)}
        </Typography>
      )}

      {isExpired && (
        <Alert severity="warning" sx={{ width: "100%" }}>
          OTP has expired. Please request a new one.
        </Alert>
      )}

      {error && (
        <Fade in={!!error}>
          <Alert severity="error" sx={{ width: "100%" }}>
            {error}
          </Alert>
        </Fade>
      )}

      {success && (
        <Fade in={!!success}>
          <Alert severity="success" sx={{ width: "100%" }}>
            {success}
          </Alert>
        </Fade>
      )}

      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{ width: "100%" }}
      >
        <StyledInputContainer>
          {Array.from({ length: digitCount }, (_, index) => (
            <Controller
              key={index}
              name="otp"
              control={control}
              render={({ field: { onChange, value } }) => (
                <StyledOTPInput
                  inputRef={(el) => (inputRefs.current[index] = el)}
                  variant="outlined"
                  placeholder={placeholder}
                  inputProps={{
                    maxLength: 1,
                    style: { textAlign: "center" },
                  }}
                  value={(value || "").charAt(index) || ""}
                  onChange={(e) =>
                    handleInputChange(index, e.target.value, onChange)
                  }
                  onKeyDown={(e) =>
                    handleKeyDown(
                      index,
                      e as React.KeyboardEvent<HTMLInputElement>
                    )
                  }
                  disabled={isLoading || isExpired}
                  error={false}
                  autoComplete="off"
                />
              )}
            />
          ))}
        </StyledInputContainer>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2 }}
          sx={{
            mt: 3,
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            maxWidth: "100%",
            padding: { xs: 0.5, sm: 1 },
            boxSizing: "border-box",
          }}
        >
          <StyledButton
            type="submit"
            variant="contained"
            disabled={isLoading || isExpired}
            startIcon={
              isLoading ? <CircularProgress size={18} color="inherit" /> : null
            }
          >
            {isLoading ? "Verifying..." : "Verify"}
          </StyledButton>

          {showResend && (
            <StyledButton
              variant="outlined"
              onClick={handleResend}
              disabled={resendTimer > 0 || isLoading}
            >
              {resendTimer > 0 ? `Resend in ${resendTimer}s` : "Resend Otp"}
            </StyledButton>
          )}
        </Stack>
      </Box>
    </StyledOTPContainer>
  );
};

export default LumoraOTP;
