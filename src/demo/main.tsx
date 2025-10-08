import React from 'react';
import ReactDOM from 'react-dom/client';
import SimpleApp from './SimpleApp';

// Render the SimpleApp component to the DOM
ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<SimpleApp />
	</React.StrictMode>
);
