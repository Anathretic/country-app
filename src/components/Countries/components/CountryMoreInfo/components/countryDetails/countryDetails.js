import { getPluralTitle } from '../../../../../../utils/getPluralTitle';
import { getSafeValue } from '../../../../../../utils/getSafeValue';

export const generateCountryDetails = async ({ country }) => {
	const countryDetails = {
		name: country.name.official,
		nativeName: getSafeValue(country.name.nativeName ? Object.values(country.name.nativeName)[0].official : null),
		capital: getSafeValue(country.capital?.[0]),
		region: country.region,
		subRegion: getSafeValue(country.subregion),
		population: country.population.toLocaleString(),
		currencies: getSafeValue(
			country.currencies
				? Object.values(country.currencies)
						.map(currency => currency.name)
						.join(', ')
				: null
		),
		languages: getSafeValue(country.languages ? Object.values(country.languages).join(', ') : null),
		topLevelDomain: getSafeValue(country.tld ? country.tld.map(tld => tld).join(', ') : null),
		startOfWeek: getSafeValue(
			country.startOfWeek ? country.startOfWeek.charAt(0).toUpperCase() + country.startOfWeek.slice(1) : null
		),
	};

	const titles = {
		currencies: getPluralTitle(Object.values(country.currencies || {}), 'Currency', 'Currencies'),
		languages: getPluralTitle(Object.values(country.languages || {}), 'Language', 'Languages'),
		topLevelDomain: getPluralTitle(country.tld || [], 'Top level domain', 'Top level domains'),
		borders: getPluralTitle(country.borders || [], 'Border country', 'Border countries'),
	};

	return { countryDetails, titles };
};
