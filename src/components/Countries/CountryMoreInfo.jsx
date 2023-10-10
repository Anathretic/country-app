import { handlePluralTitle } from '../../utils/handlePluralTitle';
import { scrollToTop } from '../../utils/scrollToTop';

export const CountryMoreInfo = ({ data, setShowMoreInfo, setInputValue, setSelectValue, moreInfoDataHandler }) => {
	const [country] = data;

	const countryName = country.name.official;
	const countryNativeName = country.name.nativeName ? Object.values(country.name.nativeName)[0].official : 'N/A';
	const countryCapital = country.capital ? country.capital && country.capital[0] : 'N/A';
	const countrySubRegion = country.subregion ? country.subregion : 'N/A';
	const countryPopulation = country.population.toLocaleString();
	const countryCurrencies = country.currencies
		? Object.values(country.currencies)
				.map(currency => currency.name)
				.join(', ')
		: 'N/A';
	const countryLanguages = country.languages ? Object.values(country.languages).join(', ') : 'N/A';
	const countryTopLevelDomain = country.tld ? country.tld.map(tld => tld).join(', ') : 'N/A';
	const countryBorders = country.borders
		? country.borders.map(border => (
				<button
					type='button'
					className='country-more-info-border-button'
					key={border}
					onClick={() => {
						moreInfoDataHandler(border);
						scrollToTop();
					}}>
					{border}
				</button>
		  ))
		: 'No border countries!';
	const countryStartOfWeek = country.startOfWeek
		? country.startOfWeek.charAt(0).toUpperCase() + country.startOfWeek.slice(1)
		: 'N/A';

	const countryCurrenciesTitle = country.currencies
		? handlePluralTitle(Object.values(country.currencies), 'Currency:', 'Currencies:')
		: 'Currency:';
	const countryLanguagesTitle = country.languages
		? handlePluralTitle(Object.values(country.languages), 'Language:', 'Languages:')
		: 'Languages:';
	const countryTopLevelDomainTitle = country.tld
		? handlePluralTitle(country.tld, 'Top level domain:', 'Top level domains:')
		: 'Top level domain:';
	const countryBordersTitle = country.borders
		? handlePluralTitle(country.borders, 'Border country:', 'Border countries:')
		: 'Border countries:';

	const handleBack = () => {
		setShowMoreInfo(false);
		setInputValue('');
		setSelectValue('');
	};

	return (
		<div className='country-more-info-wrapper'>
			<img className='country-more-info-flag' src={country.flags.png} alt={country.flags.alt} />
			<p className='country-more-info-title'>{countryName}</p>
			<div className='country-more-info-container'>
				<p>Native name:</p>
				<span>{countryNativeName}</span>
			</div>
			<div className='country-more-info-container'>
				<p>Capital:</p>
				<span>{countryCapital}</span>
			</div>
			<div className='country-more-info-container'>
				<p>Region:</p>
				<span>{country.region}</span>
			</div>
			<div className='country-more-info-container'>
				<p>Sub region:</p>
				<span>{countrySubRegion}</span>
			</div>
			<div className='country-more-info-container'>
				<p>Population:</p>
				<span>{countryPopulation}</span>
			</div>
			<div className='country-more-info-container'>
				<p>{countryCurrenciesTitle}</p>
				<span>{countryCurrencies}</span>
			</div>
			<div className='country-more-info-container'>
				<p>{countryLanguagesTitle}</p>
				<span>{countryLanguages}</span>
			</div>
			<div className='country-more-info-container'>
				<p>{countryTopLevelDomainTitle}</p>
				<span>{countryTopLevelDomain}</span>
			</div>
			<div className='country-more-info-container'>
				<p>Start of the week:</p>
				<span>{countryStartOfWeek}</span>
			</div>
			<div className='country-more-info-container'>
				<p>{countryBordersTitle}</p>
				<div className='country-more-info-button-box'>{countryBorders}</div>
			</div>
			<button type='button' className='country-more-info-button' onClick={handleBack}>
				home
			</button>
		</div>
	);
};
