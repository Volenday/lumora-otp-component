import React from 'react';
import { Container, Typography, Box } from '@mui/material';

// Simple test component to verify the demo is working
const TestApp: React.FC = () => {
	return (
		<Container maxWidth="sm" sx={{ py: 4 }}>
			<Box sx={{ textAlign: 'center' }}>
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

// Export the TestApp component as default
export default TestApp;
