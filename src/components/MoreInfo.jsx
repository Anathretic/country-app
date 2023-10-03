export const MoreInfo = ({ data, setListStatus, getData }) => {
	const handleBack = () => {
		setListStatus(true)
		getData()
	}

	console.log(data)
	return (
		<div>
			<p>{data[0].name.common}</p>
			<button onClick={handleBack}>Back</button>
		</div>
	)
}
