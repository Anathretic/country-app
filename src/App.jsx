import { useState } from 'react'
import { DataHandler } from './getDataHelper'

import { CountryList } from './components/CountryList'

function App() {
	const [countries, setCountries] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	const [appStatus, setAppStatus] = useState(false)
	const [darkMode, setDarkMode] = useState(false)

	const getData = () => {
		setIsLoading(true)
		DataHandler()
			.then(res => {
				console.log(res)
				setCountries(res)
				setAppStatus(true)
			})
			.catch(err => console.log(err))
			.finally(() => setIsLoading(false))
	}

	return (
		<div className={`country-app ${darkMode && 'dark-mode'}`}>
			{isLoading ? (
				<p>Loading..</p>
			) : appStatus ? (
				<CountryList countries={countries} setDarkMode={setDarkMode} darkMode={darkMode} />
			) : (
				<div>
					<button onClick={getData}>Start</button>
				</div>
			)}
		</div>
	)
}

export default App
