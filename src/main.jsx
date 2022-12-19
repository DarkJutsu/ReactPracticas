import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import AppRoutingOne from './AppRoutingOne';
import './index.css';
import './styles/styleScrollBar.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		{/* <App /> */}
		<BrowserRouter>
			<AppRoutingOne />
		</BrowserRouter>
	</React.StrictMode>
);
