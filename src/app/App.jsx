import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { DarkModeContext } from '../shared/context/DarkModeContext';
import { CountryListWrapper } from '../features/Countries/components/CountryListWrapper';
import { CountryList } from '../features/Countries/components/CountryList';
import { Header } from '../shared/components/Header';
import { Footer } from '../shared/components/Footer';
import { PageNotFound } from '../shared/components/PageNotFound';

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
