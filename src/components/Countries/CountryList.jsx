import { useContext, useEffect, useState } from 'react';
import { CountryItem } from './CountryItem';
import { CountryMoreInfo } from './CountryMoreInfo';
import { CountryListInputFilter, CountryListSelectFilter } from './CountryListFilters';
import { GoToTopBtn } from '../GoToTopBtn';

import { CountryListLoadingContext } from '../../context/CountryListLoadingContext';
import { useFilterInputs } from '../../hooks/useFilterInputs';
import { DataHandler } from '../../helpers/getDataHelper';
import { filterCountryList } from '../../helpers/filterCountryList';
import { sortCountryList } from '../../helpers/sortCountryList';
import { scrollToTop } from '../../utils/scrollToTop';

export const CountryList = ({ countries }) => {
	const [showMoreInfo, setShowMoreInfo] = useState(false);
	const [moreInfoData, setMoreInfoData] = useState([]);
	const { cursorLoading } = useContext(CountryListLoadingContext);
	const [inputs, setInputs, handleInputChange] = useFilterInputs();

	const moreInfoDataHandler = id => {
		countries.find(data => {
			if (data.cca3 === id) {
				DataHandler(id)
					.then(res => {
						setMoreInfoData(res);
						setShowMoreInfo(true);
					})
					.catch(err => console.log(err));
			}
		});
	};

	useEffect(() => {
		scrollToTop();
	}, [showMoreInfo]);

	return (
		<>
			{showMoreInfo ? (
				<CountryMoreInfo
					data={moreInfoData}
					setShowMoreInfo={setShowMoreInfo}
					setInputs={setInputs}
					moreInfoDataHandler={moreInfoDataHandler}
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
							{countries
								.filter(country => filterCountryList(country, inputs.searchCountry, inputs.continentSelect))
								.map(data => <CountryItem key={data.cca3} data={data} moreInfoDataHandler={moreInfoDataHandler} />)
								.sort((firstCountry, secondCountry) => sortCountryList(firstCountry, secondCountry))}
						</div>
					</div>
				</>
			)}
		</>
	);
};
