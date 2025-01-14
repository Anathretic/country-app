import { useContext, useEffect, useState } from 'react';
import { CountryListItem } from './components/CountryListItem';
import { CountryItemDetails } from './components/CountryItemDetails/CountryItemDetails';
import { CountryListInputFilterElement, CountryListSelectFilterElement } from './components/CountryListFilterElements';
import { GoToTopBtn } from '../GoToTopBtn';

import { CountryListLoaderContext } from '../../context/CountryListLoaderContext';
import { GetCountryDataContext } from '../../context/GetCountryDataContext';
import { useFilterInputs } from '../../hooks/useFilterInputs';
import { filterCountryList } from '../../helpers/filterCountryListHelper';
import { sortCountryList } from '../../helpers/sortCountryListHelper';
import { scrollToTop } from '../../utils/scrollToTop';

export const CountryList = () => {
	const [showDetails, setShowDetails] = useState(false);
	const [countryID, setCountryID] = useState('');

	const { cursorLoading } = useContext(CountryListLoaderContext);
	const { countryData } = useContext(GetCountryDataContext);
	const [inputs, setInputs, handleInputChange] = useFilterInputs();

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
				<>
					<GoToTopBtn />
					<div className='country-list-wrapper'>
						<div className='country-list-filters'>
							<CountryListInputFilterElement
								value={inputs.searchCountry}
								onChange={handleInputChange}
								disabled={cursorLoading ? true : false}
							/>
							<CountryListSelectFilterElement
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
									<CountryListItem
										key={data.cca3}
										data={data}
										setCountryID={setCountryID}
										setShowDetails={setShowDetails}
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
