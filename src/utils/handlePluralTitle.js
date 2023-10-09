export const handlePluralTitle = (data, firstOption, secondOoption) => {
	if (data) {
		if (data.length === 1) {
			return firstOption;
		} else {
			return secondOoption;
		}
	} else {
		return secondOoption;
	}
};
