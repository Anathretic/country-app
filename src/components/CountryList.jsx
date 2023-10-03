import { useState } from 'react'
import { CountryItem } from './CountryItem'
import { DataHandler } from '../getDataHelper'
import { MoreInfo } from './MoreInfo'

export const CountryList = ({ countries, setCountries, getData }) => {
	const [listStatus, setListStatus] = useState(true)

	const moreInfoHandler = id => {
		countries.find(data => {
			if (data.cca3 === id) {
				DataHandler(id)
					.then(res => {
						setCountries(res)
						setListStatus(false)
					})
					.catch(err => console.log(err))
			}
		})
	}

	if (!listStatus) {
		return <MoreInfo data={countries} setListStatus={setListStatus} getData={getData} />
	}

	if (listStatus) {
		return (
			<div>
				{countries.map(data => (
					<CountryItem key={data.cca3} data={data} moreInfoHandler={moreInfoHandler} />
				))}
			</div>
		)
	}
}
