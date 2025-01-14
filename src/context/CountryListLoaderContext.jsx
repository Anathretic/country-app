import { createContext, useState } from 'react';

export const CountryListLoaderContext = createContext();

const CountryListLoaderProvider = ({ children }) => {
	const [cursorLoading, setCursorLoading] = useState(false);

	const toggleLoading = () => {
		setCursorLoading(!cursorLoading);
	};

	return (
		<CountryListLoaderContext.Provider value={{ cursorLoading, toggleLoading }}>
			{children}
		</CountryListLoaderContext.Provider>
	);
};

export default CountryListLoaderProvider;
