import { useState } from 'react'
import { DataHandler } from '../getDataHelper'

import { CountryItem } from './CountryItem'
import { CountryMoreInfo } from './CountryMoreInfo'

export const CountryList = ({ countries, setDarkMode, darkMode }) => {
	const [showMoreInfo, setShowMoreInfo] = useState(false)
	const [moreInfo, setMoreInfo] = useState([])
	const [inputValue, setInputValue] = useState('')
	const [selectValue, setSelectValue] = useState('')

	const handleDarkMode = () => {
		if (!darkMode) {
			setDarkMode(true)
		} else {
			setDarkMode(false)
		}
	}

	const moreInfoHandler = id => {
		countries.find(data => {
			if (data.cca3 === id) {
				DataHandler(id)
					.then(res => {
						setMoreInfo(res)
						setShowMoreInfo(true)
					})
					.catch(err => console.log(err))
			}
		})
	}

	if (showMoreInfo) {
		return (
			<CountryMoreInfo
				data={moreInfo}
				setShowMoreInfo={setShowMoreInfo}
				setInputValue={setInputValue}
				setSelectValue={setSelectValue}
			/>
		)
	}

	if (!showMoreInfo) {
		return (
			<div>
				<div>
					<button onClick={handleDarkMode}>Dark Mode</button>
				</div>
				<div>
					<input type='text' placeholder='Search..' value={inputValue} onChange={e => setInputValue(e.target.value)} />
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
				<div>
					{countries
						.filter(country => {
							if (!inputValue && !selectValue) {
								return country
							} else if (
								country.name.common.toLowerCase().includes(inputValue.toLowerCase()) &&
								(!selectValue || country.continents.toString().toLowerCase().includes(selectValue))
							) {
								return country
							}
						})
						.map(data => (
							<CountryItem key={data.cca3} data={data} moreInfoHandler={moreInfoHandler} />
						))}
				</div>
			</div>
		)
	}
}
