import { useContext, useEffect, useState } from 'react';
import { CountryItem } from './CountryItem';
import { CountryMoreInfo } from './CountryMoreInfo';
import { CountryListInputFilter, CountryListSelectFilter } from './CountryListFilters';
import { GoToTopBtn } from '../GoToTopBtn';

import { CountryListLoaderContext } from '../../context/CountryListLoaderContext';
import { useFilterInputs } from '../../hooks/useFilterInputs';
import { DataHandler } from '../../helpers/getDataHelper';
import { filterCountryList } from '../../helpers/filterCountryList';
import { sortCountryList } from '../../helpers/sortCountryList';
import { scrollToTop } from '../../utils/scrollToTop';

export const CountryList = ({ countries }) => {
	const [showMoreInfo, setShowMoreInfo] = useState(false);
	const [moreInfoData, setMoreInfoData] = useState([]);
	const [moreInfoLoader, setMoreInfoLoader] = useState(false);
	
	const { cursorLoading } = useContext(CountryListLoaderContext);
	const [inputs, setInputs, handleInputChange] = useFilterInputs();

	const moreInfoDataHandler = id => {
		countries.find(data => {
			if (data.cca3 === id) {
				setMoreInfoLoader(true);
				DataHandler(id)
					.then(res => {
						setMoreInfoData(res);
						setShowMoreInfo(true);
					})
					.catch(err => console.log(err))
					.finally(() => {
						setMoreInfoLoader(false);
					});
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
					moreInfoLoader={moreInfoLoader}
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
