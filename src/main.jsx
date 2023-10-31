import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

import { DarkModeProvider } from './context/DarkModeContext.jsx';
import { CountryListLoaderProvider } from './context/CountryListLoaderContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<DarkModeProvider>
				<CountryListLoaderProvider>
					<App />
				</CountryListLoaderProvider>
			</DarkModeProvider>
		</BrowserRouter>
	</React.StrictMode>
);
