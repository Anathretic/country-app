export const DataHandler = async id => {
	try {
		const apiUrl = 'https://restcountries.com/v3.1/';
		let endOfUrl = id ? `alpha/${id}` : 'all';

		const response = await fetch(`${apiUrl}${endOfUrl}`, {
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
