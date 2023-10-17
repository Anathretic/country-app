import { useEffect, useState } from 'react';
import { CountryItem } from './CountryItem';
import { CountryMoreInfo } from './CountryMoreInfo';
import { CountryListInputFilter, CountryListSelectFilter } from './CountryListFilters';
import { GoToTopBtn } from '../GoToTopBtn';

import { useFilterInputs } from '../../hooks/useFilterInputs';
import { DataHandler } from '../../helpers/getDataHelper';
import { filterCountryList } from '../../helpers/filterCountryList';
import { sortCountryList } from '../../helpers/sortCountryList';
import { scrollToTop } from '../../utils/scrollToTop';

export const CountryList = ({ countries }) => {
	const [showMoreInfo, setShowMoreInfo] = useState(false);
	const [moreInfoData, setMoreInfoData] = useState([]);
	const [cursorLoading, setCursorLoading] = useState(false);

	const [inputs, setInputs, handleInputChange] = useFilterInputs();

	const moreInfoDataHandler = id => {
		countries.find(data => {
			if (data.cca3 === id) {
				setCursorLoading(true);
				DataHandler(id)
					.then(res => {
						setMoreInfoData(res);
						setShowMoreInfo(true);
					})
					.catch(err => console.log(err))
					.finally(() => setCursorLoading(false));
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
					setCursorLoading={setCursorLoading}
				/>
			) : (
				<>
					<GoToTopBtn />
					<div className='country-list-wrapper'>
						<div className='country-list-filters'>
							<CountryListInputFilter value={inputs.searchCountry} onChange={handleInputChange} />
							<CountryListSelectFilter value={inputs.continentSelect} onChange={handleInputChange} />
						</div>
						<div className='country-list-instructions'>
							<p>To show more info, click the flag!</p>
						</div>
						<div className='country-list-container'>
							{countries
								.filter(country => filterCountryList(country, inputs.searchCountry, inputs.continentSelect))
								.map(data => (
									<CountryItem
										key={data.cca3}
										data={data}
										moreInfoDataHandler={moreInfoDataHandler}
										setCursorLoading={setCursorLoading}
										cursorLoading={cursorLoading}
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
