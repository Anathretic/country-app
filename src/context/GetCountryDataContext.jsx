import { createContext, useEffect, useState } from 'react';
import { DataHandler } from '../helpers/getDataHelper';

export const GetCountryDataContext = createContext();

const GetCountryDataProvider = ({ children }) => {
	const [countryData, setCountryData] = useState([]);
	const [refreshData, setRefreshData] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		DataHandler()
			.then(data => {
				setCountryData(data);
			})
			.catch(err => console.error(err.message))
			.finally(() => {
				setIsLoading(false);
				setRefreshData(false);
			});
	}, [refreshData]);

	return (
		<GetCountryDataContext.Provider value={{ isLoading, countryData, setRefreshData }}>
			{children}
		</GetCountryDataContext.Provider>
	);
};

export default GetCountryDataProvider;