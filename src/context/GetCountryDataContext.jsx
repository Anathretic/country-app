import { createContext, useCallback, useEffect, useState } from 'react';
import { DataHandler } from '../helpers/getDataHelper';

export const GetCountryDataContext = createContext();

const GetCountryDataProvider = ({ children }) => {
	const [countryData, setCountryData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(false);

	const fetchCountriesData = useCallback(() => {
		setError(false);

		DataHandler()
			.then(data => {
				setCountryData(data);
				setError(false);
			})
			.catch(err => {
				setError(true);
				if (err instanceof Error) {
					console.error(err.message);
				}
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, []);

	useEffect(() => {
		if (isLoading) fetchCountriesData();
	}, [isLoading]);

	return (
		<GetCountryDataContext.Provider value={{ isLoading, setIsLoading, countryData, error }}>
			{children}
		</GetCountryDataContext.Provider>
	);
};

export default GetCountryDataProvider;
