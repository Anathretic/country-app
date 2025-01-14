import { createContext, useEffect, useState } from 'react';
import { DataHandler } from '../helpers/getDataHelper';

export const GetCountryDataContext = createContext();

const GetCountryDataProvider = ({ children }) => {
	const [countryData, setCountryData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		DataHandler()
			.then(data => {
				setCountryData(data);
			})
			.catch(err => console.error(err.message))
			.finally(() => setIsLoading(false));
	}, []);

	return <GetCountryDataContext.Provider value={{ isLoading, countryData }}>{children}</GetCountryDataContext.Provider>;
};

export default GetCountryDataProvider;
