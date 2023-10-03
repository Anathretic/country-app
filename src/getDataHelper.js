export const DataHandler = async id => {
	return new Promise(async (resolve, reject) => {
		const apiUrl = 'https://restcountries.com/v3.1'
		let endOfUrl = '/all'
		if (id) {
			endOfUrl = `/alpha/${id}`
		}
		const response = await fetch(`${apiUrl}${endOfUrl}`, {
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(),
		})

		const jsonResponse = await response.json()
		if (response.status === 200) {
			resolve(jsonResponse)
		} else {
			reject(jsonResponse)
		}
	})
}
