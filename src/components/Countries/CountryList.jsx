import { useContext, useEffect, useState } from 'react';
import { CountryListItem } from './components/CountryListItem';
import { CountryItemDetails } from './components/CountryItemDetails/CountryItemDetails';
import { CountryListInputFilterElement, CountryListSelectFilterElement } from './components/CountryListFilterElements';
import { GoToTopBtn } from '../GoToTopBtn';
import { BarsLoader } from '../Loaders';

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
	const { countryData, setRefreshData, isLoading, setIsLoading } = useContext(GetCountryDataContext);
	const [inputs, setInputs, handleInputChange] = useFilterInputs();

	const handleRefreshDataBtn = () => {
		setRefreshData(true);
		setIsLoading(true);
	};

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
						{isLoading ? (
							<BarsLoader />
						) : countryData.length > 0 ? (
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
						) : (
							<div className='country-list-special-box'>
								<p className='country-list-special-text'>Ups, something went wrong..</p>
								<button onClick={handleRefreshDataBtn} type='button' className='country-list-special-btn'>
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
