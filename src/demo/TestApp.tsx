import React from "react";
import { Container, Typography, Box } from "@mui/material";

const TestApp: React.FC = () => {
  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Test App
        </Typography>
        <Typography variant="body1">
          If you can see this, the demo is working!
        </Typography>
      </Box>
    </Container>
  );
};

export default TestApp;
