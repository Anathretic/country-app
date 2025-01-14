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
			throw new Error(JSON.stringify(errorResponse));
		}

		return await response.json();
	} catch (error) {
		console.error('Error occured: ', error.message);
		throw error;
	}
};
