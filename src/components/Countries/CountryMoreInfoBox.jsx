export const CountryMoreInfoBox = ({label, dataSpan, children}) => {
	return (
		<div className='country-more-info-container'>
			<p>{label}:</p>
			<span>{dataSpan}</span>
            {children}
		</div>
	);
};
