import { getPluralTitle } from '../../../../../../utils/getPluralTitle';
import { getSafeValue } from '../../../../../../utils/getSafeValue';

export const generateCountryItemDetails = async ({ country }) => {
	const countryDetails = {
		name: country.name.official,
		nativeName: getSafeValue(
			country.name.nativeName && Object.values(country.name.nativeName).length > 0
				? Object.values(country.name.nativeName)[0].official
				: null
		),
		capital: getSafeValue(country.capital?.[0]),
		continents: country.continents.join(', '),
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
	};

	const titles = {
		continents: getPluralTitle(Object.values(country.continents || {}), 'Continent', 'Continents'),
		currencies: getPluralTitle(Object.values(country.currencies || {}), 'Currency', 'Currencies'),
		languages: getPluralTitle(Object.values(country.languages || {}), 'Language', 'Languages'),
		topLevelDomain: getPluralTitle(country.tld || [], 'Top level domain', 'Top level domains'),
		borders: getPluralTitle(country.borders || [], 'Border country', 'Border countries'),
	};

	return { countryDetails, titles };
};
