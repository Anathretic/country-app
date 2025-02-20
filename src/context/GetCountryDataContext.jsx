import { createContext, useEffect, useState } from 'react';
import { DataHandler } from '../helpers/getDataHelper';

export const GetCountryDataContext = createContext();

const GetCountryDataProvider = ({ children }) => {
	const [countryData, setCountryData] = useState([]);
	const [refreshData, setRefreshData] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		DataHandler()
			.then(data => {
				setCountryData(data);
			})
			.catch(err => {
				if (err instanceof Error) {
					setError(true);
				}
			})
			.finally(() => {
				setIsLoading(false);
				setRefreshData(false);
			});
	}, [refreshData]);

	return (
		<GetCountryDataContext.Provider value={{ isLoading, setIsLoading, countryData, setRefreshData, error, setError }}>
			{children}
		</GetCountryDataContext.Provider>
	);
};

export default GetCountryDataProvider;
