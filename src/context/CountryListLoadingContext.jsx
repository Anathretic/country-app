import { createContext, useState } from 'react';

export const CountryListLoadingContext = createContext();

export const CountryListLoadingProvider = ({ children }) => {
	const [cursorLoading, setCursorLoading] = useState(false);

	const toggleLoading = () => {
		setCursorLoading(!cursorLoading);
	};

	return (
		<CountryListLoadingContext.Provider value={{ cursorLoading, toggleLoading }}>
			{children}
		</CountryListLoadingContext.Provider>
	);
};
