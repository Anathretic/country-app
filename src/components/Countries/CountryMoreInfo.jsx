import { useContext } from 'react';
import { handlePluralTitle } from '../../utils/handlePluralTitle';
import { scrollToTop } from '../../utils/scrollToTop';
import { CountryMoreInfoBox } from './CountryMoreInfoBox';
import { CountryListLoaderContext } from '../../context/CountryListLoaderContext';
import { CirclesLoader } from '../Loaders';

export const CountryMoreInfo = ({ data, setShowMoreInfo, setInputs, moreInfoDataHandler, moreInfoLoader }) => {
	const { toggleLoading } = useContext(CountryListLoaderContext);
	const [country] = data;

	const countryName = country.name.official;
	const countryNativeName = country.name.nativeName ? Object.values(country.name.nativeName)[0].official : 'N/A';
	const countryCapital = country.capital ? country.capital && country.capital[0] : 'N/A';
	const countryRegion = country.region;
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
		? handlePluralTitle(Object.values(country.currencies), 'Currency', 'Currencies')
		: 'Currency';
	const countryLanguagesTitle = country.languages
		? handlePluralTitle(Object.values(country.languages), 'Language', 'Languages')
		: 'Languages';
	const countryTopLevelDomainTitle = country.tld
		? handlePluralTitle(country.tld, 'Top level domain', 'Top level domains')
		: 'Top level domain';
	const countryBordersTitle = country.borders
		? handlePluralTitle(country.borders, 'Border country', 'Border countries')
		: 'Border countries';

	const handleBack = () => {
		toggleLoading();
		setShowMoreInfo(false);
		setInputs({ searchCountry: '', continentSelect: '' });
	};

	return (
		<div className='country-more-info-wrapper'>
			{moreInfoLoader ? (
				<CirclesLoader />
			) : (
				<img className='country-more-info-flag' src={country.flags.png} alt={country.flags.alt} />
			)}
			<p className='country-more-info-title'>{countryName}</p>
			<CountryMoreInfoBox label='Native name' dataSpan={countryNativeName} />
			<CountryMoreInfoBox label='Capital' dataSpan={countryCapital} />
			<CountryMoreInfoBox label='Region' dataSpan={countryRegion} />
			<CountryMoreInfoBox label='Sub region' dataSpan={countrySubRegion} />
			<CountryMoreInfoBox label='Population' dataSpan={countryPopulation} />
			<CountryMoreInfoBox label={countryCurrenciesTitle} dataSpan={countryCurrencies} />
			<CountryMoreInfoBox label={countryLanguagesTitle} dataSpan={countryLanguages} />
			<CountryMoreInfoBox label={countryTopLevelDomainTitle} dataSpan={countryTopLevelDomain} />
			<CountryMoreInfoBox label='Start of the week' dataSpan={countryStartOfWeek} />
			<CountryMoreInfoBox label={countryBordersTitle}>
				<div className='country-more-info-button-box'>{countryBorders}</div>
			</CountryMoreInfoBox>
			<button type='button' className='country-more-info-button' onClick={handleBack}>
				home
			</button>
		</div>
	);
};
