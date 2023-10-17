export const sortCountryList = (firstValue, secondValue) => {
	const firstCountry = firstValue.props.data.name.common.toLowerCase();
	const secondCountry = secondValue.props.data.name.common.toLowerCase();

	if (firstCountry < secondCountry) {
		return -1;
	}

	if (firstCountry > secondCountry) {
		return 1;
	}

	return 0;
};
