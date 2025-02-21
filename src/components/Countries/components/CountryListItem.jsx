import { memo, useCallback, useState } from 'react';
import { CirclesLoader } from '../../Loaders';

const CountryListItem = memo(({ data, setCountryID, setShowDetails }) => {
	const [isLoading, setIsLoading] = useState(false);

	const handleClick = useCallback(() => {
		setIsLoading(true);
		setTimeout(() => {
			setCountryID(data.cca3);
			setShowDetails(true);
			setIsLoading(false);
		}, 150);
	}, [data.cca3, setCountryID, setShowDetails]);

	return (
		<div className='country-list-item'>
			<div className='country-list-box'>
				<button
					type='button'
					className={`country-list-box-img ${isLoading ? 'cursor-loader' : ''}`}
					onClick={handleClick}>
					{isLoading ? <CirclesLoader /> : <img src={data.flags.png} alt={`Flag of ${data.name.common}`} />}
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
	);
});

CountryListItem.displayName = 'CountryListItem';

export default CountryListItem;
