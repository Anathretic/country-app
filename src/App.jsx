import { useState } from 'react'
import { DataHandler } from './getDataHelper'
import { CountryList } from './components/CountryList'

function App() {
	const [countries, setCountries] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	const [appStatus, setAppStatus] = useState(false)

	const getData = () => {
		clearTimeout(setIsLoading)
		setIsLoading(true)
		DataHandler()
			.then(res => {
				console.log(res)
				setCountries(res)
				setAppStatus(true)
			})
			.catch(err => console.log(err))
			.finally(() =>
				setTimeout(() => {
					setIsLoading(false)
				}, 500)
			)
	}

	if (isLoading) {
		return <p>Loading..</p>
	}

	if (appStatus) {
		return <CountryList countries={countries} getData={getData} setCountries={setCountries}/>
	}

	if (!appStatus) {
		return (
			<div>
				<button onClick={getData}>Start</button>
			</div>
		)
	}
}

export default App
