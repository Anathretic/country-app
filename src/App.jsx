import { useContext, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { DataHandler } from './helpers/getDataHelper';

import { CountryList } from './components/Countries/CountryList';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BarsLoader } from './components/Loader';
import { PageNotFound } from './components/PageNotFound';

import { DarkModeContext } from './context/DarkModeContext';

function App() {
	const [countries, setCountries] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const { darkMode } = useContext(DarkModeContext);

	const getData = () => {
		setIsLoading(true);
		DataHandler()
			.then(res => {
				setCountries(res);
			})
			.catch(err => console.log(err))
			.finally(() =>
				setTimeout(() => {
					setIsLoading(false);
				}, 1000)
			);
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<>
			<div className={`app ${darkMode ? 'dark-mode' : 'light-mode'}`}>
				<Header />
				<Routes>
					<Route path='/' element={<div>{isLoading ? <BarsLoader /> : <CountryList countries={countries} />}</div>} />
					<Route
						path='*'
						element={
							<>
								<PageNotFound />
							</>
						}
					/>
				</Routes>
				<Footer />
			</div>
		</>
	);
}

export default App;
