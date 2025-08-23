export const sortCountryList = (firstCountry, secondCountry) => {
	const firstName = firstCountry?.name?.common?.toLowerCase() || '';
	const secondName = secondCountry?.name?.common?.toLowerCase() || '';

	if (firstName < secondName) return -1;
	if (firstName > secondName) return 1;
	return 0;
};
