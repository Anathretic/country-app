export const CountryItem = ({ data, moreInfoHandler }) => {
	return (
		<div>
			<p>{data.name.official}</p>
			<button onClick={() => moreInfoHandler(data.cca3)}>More Info</button>
		</div>
	)
}
