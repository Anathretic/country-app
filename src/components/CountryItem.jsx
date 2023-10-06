export const CountryItem = ({ data, moreInfoHandler }) => {
	return (
		<div className='country-list-item'>
			<div className='country-list-box'>
				<button className='country-list-box-img' onClick={() => moreInfoHandler(data.cca3)}>
					<img src={data.flags.png} alt={`Flag of ${data.name.common}`} />
				</button>
				<p className='country-list-box-name'>
					<strong>{data.name.common}</strong>
				</p>
				<p className='country-list-box-capital'>
					<strong>Capital:</strong> {data.capital ? data.capital[0] : 'N/A'}
				</p>
				<p className='country-list-box-population'>
					<strong>Population:</strong> {data.population.toLocaleString()}
				</p>
				<p className='country-list-box-continent'>
					<strong>Continent:</strong> {data.continents.join(', ')}
				</p>
			</div>
		</div>
	)
}
