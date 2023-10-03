export const CountryMoreInfo = ({ data, setShowMoreInfo }) => {
	const handleBack = () => {
		setShowMoreInfo(false)
	}

	console.log(data)
	return (
		<div>
			<p>{data[0].name.common}</p>
			<button onClick={handleBack}>Back</button>
		</div>
	)
}
