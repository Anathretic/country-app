import { getSafeValue } from '../../../../../utils/getSafeValue';
import { scrollToTop } from '../../../../../utils/scrollToTop';

export const CountryItemDetailsBox = ({ label, dataSpan, children }) => {
	return (
		<div className='country-item-details-container'>
			<p>{label}:</p>
			<span>{dataSpan}</span>
			{children}
		</div>
	);
};

export const CountryItemDetailsBorderBtns = ({ selectedCountry, setCountryID }) => {
	return (
		<div className='country-item-details-button-box'>
			{getSafeValue(
				selectedCountry.borders
					? selectedCountry.borders.map(border => (
							<button
								type='button'
								className='country-item-details-border-button'
								key={border}
								onClick={() => {
									scrollToTop();
									setCountryID(border);
								}}>
								{border}
							</button>
					  ))
					: 'No border countries!'
			)}
		</div>
	);
};
