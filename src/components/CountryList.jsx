import { useState } from 'react'
import { DataHandler } from '../getDataHelper'

import { CountryItem } from './CountryItem'
import { CountryMoreInfo } from './CountryMoreInfo'

export const CountryList = ({ countries }) => {
	const [showMoreInfo, setShowMoreInfo] = useState(false)
	const [moreInfo, setMoreInfo] = useState([])

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
		return <CountryMoreInfo data={moreInfo} setShowMoreInfo={setShowMoreInfo} />
	}

	if (!showMoreInfo) {
		return (
			<div>
				{countries.map(data => (
					<CountryItem key={data.cca3} data={data} moreInfoHandler={moreInfoHandler} />
				))}
			</div>
		)
	}
}
