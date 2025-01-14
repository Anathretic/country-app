import { useContext, useEffect, useState } from 'react';
import { CountryItem } from './components/CountryItem';
import { CountryMoreInfo } from './components/CountryMoreInfo/CountryMoreInfo';
import { CountryListInputFilter, CountryListSelectFilter } from './components/CountryListFilters';
import { GoToTopBtn } from '../GoToTopBtn';

import { CountryListLoaderContext } from '../../context/CountryListLoaderContext';
import { GetCountryDataContext } from '../../context/GetCountryDataContext';
import { useFilterInputs } from '../../hooks/useFilterInputs';
import { filterCountryList } from '../../helpers/filterCountryListHelper';
import { sortCountryList } from '../../helpers/sortCountryListHelper';
import { scrollToTop } from '../../utils/scrollToTop';

export const CountryList = () => {
	const [showMoreInfo, setShowMoreInfo] = useState(false);
	const [countryID, setCountryID] = useState('');

	const { cursorLoading } = useContext(CountryListLoaderContext);
	const { countryData } = useContext(GetCountryDataContext);
	const [inputs, setInputs, handleInputChange] = useFilterInputs();

	useEffect(() => {
		scrollToTop();
	}, [showMoreInfo]);

	return (
		<>
			{showMoreInfo ? (
				<CountryMoreInfo
					setShowMoreInfo={setShowMoreInfo}
					setInputs={setInputs}
					countryID={countryID}
					setCountryID={setCountryID}
				/>
			) : (
				<>
					<GoToTopBtn />
					<div className='country-list-wrapper'>
						<div className='country-list-filters'>
							<CountryListInputFilter
								value={inputs.searchCountry}
								onChange={handleInputChange}
								disabled={cursorLoading ? true : false}
							/>
							<CountryListSelectFilter
								value={inputs.continentSelect}
								onChange={handleInputChange}
								disabled={cursorLoading ? true : false}
							/>
						</div>
						<div className='country-list-instructions'>
							<p>To show more info, click the flag!</p>
						</div>
						<div className='country-list-container'>
							{countryData
								.filter(country => filterCountryList(country, inputs.searchCountry, inputs.continentSelect))
								.map(data => (
									<CountryItem
										key={data.cca3}
										data={data}
										setCountryID={setCountryID}
										setShowMoreInfo={setShowMoreInfo}
									/>
								))
								.sort((firstCountry, secondCountry) => sortCountryList(firstCountry, secondCountry))}
						</div>
					</div>
				</>
			)}
		</>
	);
};
