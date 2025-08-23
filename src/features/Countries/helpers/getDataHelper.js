export const DataHandler = async () => {
	try {
		const apiUrl =
			'https://restcountries.com/v3.1/all?fields=cca3,name,flags,capital,population,continents,subregion,currencies,languages,borders';

		const response = await fetch(`${apiUrl}`, {
			headers: {
				'Content-Type': 'application/json',
			},
		});

		if (!response.ok) {
			const errorResponse = await response.json();
			throw new Error(errorResponse?.message || 'Failed to fetch data');
		}

		return await response.json();
	} catch (error) {
		throw new Error('Error occured: ', error.message);
	}
};
