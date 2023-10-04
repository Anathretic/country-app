export const CountryMoreInfo = ({ data, setShowMoreInfo, setInputValue, setSelectValue }) => {
	const handleBack = () => {
		setShowMoreInfo(false)
		setInputValue('')
		setSelectValue('')
	}

	console.log(data)
	return (
		<div>
			<p>{data[0].name.official}</p>
			<button onClick={handleBack}>Back</button>
		</div>
	)
}
