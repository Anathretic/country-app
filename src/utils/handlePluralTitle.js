export const handlePluralTitle = (valueArr, singleTitle, pluralTitle) => {
	if (valueArr) {
		if (valueArr.length === 1) {
			return singleTitle;
		} else {
			return pluralTitle;
		}
	} else {
		return pluralTitle;
	}
};
