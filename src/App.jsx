import { useEffect, useState } from 'react';
import { DataHandler } from './helpers/getDataHelper';

import { CountryList } from './components/CountryList';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

function App() {
	const [countries, setCountries] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [darkMode, setDarkMode] = useState(false);

	const getData = () => {
		setIsLoading(true);
		DataHandler()
			.then(res => {
				console.log(res);
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
			<div data-mode={darkMode ? 'dark' : 'light'} className='app'>
				<Header setDarkMode={setDarkMode} darkMode={darkMode} />
				<div>{isLoading ? <p>Loading..</p> : <CountryList countries={countries} />}</div>
				<Footer />
			</div>
		</>
	);
}

export default App;
