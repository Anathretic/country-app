import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import GetCountryDataProvider from '../shared/context/GetCountryDataContext.jsx';
import DarkModeProvider from '../shared/context/DarkModeContext.jsx';
import App from './App.jsx';
import '../shared/styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<HelmetProvider>
			<BrowserRouter>
				<GetCountryDataProvider>
					<DarkModeProvider>
						<App />
					</DarkModeProvider>
				</GetCountryDataProvider>
			</BrowserRouter>
		</HelmetProvider>
	</React.StrictMode>
);
