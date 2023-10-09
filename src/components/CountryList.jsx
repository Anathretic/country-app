import { useEffect, useState } from 'react';
import { CountryItem } from './CountryItem';
import { CountryMoreInfo } from './CountryMoreInfo';

import { FaSearch } from 'react-icons/fa';

import { DataHandler } from '../helpers/getDataHelper';
import { scrollToTop } from '../utils/scrollToTop';

export const CountryList = ({ countries }) => {
	const [showMoreInfo, setShowMoreInfo] = useState(false);
	const [moreInfoData, setMoreInfoData] = useState([]);
	const [inputValue, setInputValue] = useState('');
	const [selectValue, setSelectValue] = useState('');

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

	if (showMoreInfo) {
		return (
			<CountryMoreInfo
				data={moreInfoData}
				setShowMoreInfo={setShowMoreInfo}
				setInputValue={setInputValue}
				setSelectValue={setSelectValue}
				moreInfoDataHandler={moreInfoDataHandler}
			/>
		);
	}

	if (!showMoreInfo) {
		return (
			<div className='country-list-wrapper'>
				<div className='country-list-filters'>
					<input type='text' placeholder='Search..' value={inputValue} onChange={e => setInputValue(e.target.value)} />
					<span className='country-list-search-icon'>
						<FaSearch />
					</span>
					<select value={selectValue} onChange={e => setSelectValue(e.target.value)}>
						<option value=''>All countries</option>
						<option value='africa'>Africa</option>
						<option value='antarctica'>Antarctica</option>
						<option value='asia'>Asia</option>
						<option value='europe'>Europe</option>
						<option value='north america'>North America</option>
						<option value='oceania'>Oceania</option>
						<option value='south america'>South America</option>
					</select>
				</div>
				<div className='country-list-instructions'>
					<p>To show more info, click the flag!</p>
				</div>
				<div className='country-list-container'>
					{countries
						.filter(country => {
							if (!inputValue && !selectValue) {
								return country;
							} else if (
								country.name.common.toLowerCase().includes(inputValue.toLowerCase()) &&
								(!selectValue || country.continents.toString().toLowerCase().includes(selectValue))
							) {
								return country;
							}
						})
						.map(data => (
							<CountryItem key={data.cca3} data={data} moreInfoDataHandler={moreInfoDataHandler} />
						))}
				</div>
			</div>
		);
	}
};
