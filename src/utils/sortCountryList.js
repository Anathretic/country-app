export const sortCountryList = (a, b) => {
	const nameA = a.props.data.name.common.toLowerCase();
	const nameB = b.props.data.name.common.toLowerCase();

	if (nameA < nameB) {
		return -1;
	}

	if (nameA > nameB) {
		return 1;
	}

	return 0;
};
