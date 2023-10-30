import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { DarkModeProvider } from './context/DarkModeContext.jsx';
import { CountryListLoadingProvider } from './context/CountryListLoadingContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<DarkModeProvider>
				<CountryListLoadingProvider>
					<App />
				</CountryListLoadingProvider>
			</DarkModeProvider>
		</BrowserRouter>
	</React.StrictMode>
);
