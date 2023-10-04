export const CountryItem = ({ data, moreInfoHandler }) => {
	return (
		<div>
			<p>{data.name.common}</p>
			<button onClick={() => moreInfoHandler(data.cca3)}>More Info</button>
		</div>
	)
}
