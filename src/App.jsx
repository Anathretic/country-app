import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { DarkModeContext } from './context/DarkModeContext';
import { CountryListWrapper } from './components/Countries/CountryListWrapper';
import { CountryList } from './components/Countries/CountryList';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { PageNotFound } from './components/PageNotFound';

const App = () => {
	const { darkMode } = useContext(DarkModeContext);

	return (
		<div className={`app ${darkMode ? 'dark-mode' : 'light-mode'}`}>
			<Header />
			<Routes>
				<Route path='/' element={<CountryListWrapper>{<CountryList />}</CountryListWrapper>} />
				<Route path='*' element={<PageNotFound />} />
			</Routes>
			<Footer />
		</div>
	);
};

export default App;
