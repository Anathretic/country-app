export const filterCountryList = (country, input, select) => {
	if (!input && !select) {
		return country;
	} else if (
		country?.name?.common?.toLowerCase().includes(input.toLowerCase()) &&
		(!select || country?.continents?.toString().toLowerCase().includes(select))
	) {
		return country;
	}
};
