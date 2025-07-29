import { useContext, useEffect, useMemo, useState } from 'react';
import { GetCountryDataContext } from '../../context/GetCountryDataContext';
import { useFilterInputs } from '../../hooks/useFilterInputs';
import { useDebounce } from '../../hooks/useDebounce';
import { filterCountryList } from '../../helpers/filterCountryListHelper';
import { sortCountryList } from '../../helpers/sortCountryListHelper';
import { CountryItemDetails } from './components/CountryItemDetails/CountryItemDetails';
import CountryListItem from './components/CountryListItem';
import { CountryListInputFilterElement, CountryListSelectFilterElement } from './components/CountryListFilterElements';
import { GoToTopBtn } from '../GoToTopBtn';
import { BarsLoader } from '../Loaders';
import { scrollToTop } from '../../utils/scrollToTop';

export const CountryList = () => {
	const [showDetails, setShowDetails] = useState(false);
	const [countryID, setCountryID] = useState('');

	const { countryData, isLoading, setIsLoading, error } = useContext(GetCountryDataContext);
	const { inputs, setInputs, handleInputChange } = useFilterInputs();

	const debouncedSearch = useDebounce(inputs.searchCountry, 500);
	const debouncedContinent = useDebounce(inputs.continentSelect, 250);

	const filteredAndSortedCountries = useMemo(() => {
		return countryData
			.filter(country => filterCountryList(country, debouncedSearch, debouncedContinent))
			.sort((firstCountry, secondCountry) => sortCountryList(firstCountry, secondCountry));
	}, [countryData, debouncedSearch, debouncedContinent]);

	const mappedCountries = useMemo(() => {
		return filteredAndSortedCountries.map(country => (
			<CountryListItem key={country.cca3} data={country} setCountryID={setCountryID} setShowDetails={setShowDetails} />
		));
	}, [filteredAndSortedCountries, setCountryID, setShowDetails]);

	useEffect(() => {
		scrollToTop();
	}, [showDetails]);

	return (
		<>
			{showDetails ? (
				<CountryItemDetails
					setShowDetails={setShowDetails}
					setInputs={setInputs}
					countryID={countryID}
					setCountryID={setCountryID}
				/>
			) : (
				<section>
					<GoToTopBtn />
					<div className='country-list-wrapper'>
						<div className='country-list-filters'>
							<CountryListInputFilterElement value={inputs.searchCountry} onChange={handleInputChange} />
							<CountryListSelectFilterElement value={inputs.continentSelect} onChange={handleInputChange} />
						</div>
						<div className='country-list-instructions'>
							<p>To show more info, click the flag!</p>
						</div>
						{isLoading ? (
							<BarsLoader />
						) : !error ? (
							<div className='country-list-container'>{mappedCountries}</div>
						) : (
							<div className='country-list-special-box'>
								<p className='country-list-special-text'>Ups, something went wrong..</p>
								<button
									onClick={() => {
										setIsLoading(true);
									}}
									type='button'
									className='country-list-special-btn'>
									Try again
								</button>
							</div>
						)}
					</div>
				</section>
			)}
		</>
	);
};
