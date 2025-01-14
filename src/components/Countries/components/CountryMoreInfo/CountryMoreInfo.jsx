import { useContext, useEffect, useState } from 'react';
import { CountryListLoaderContext } from '../../../../context/CountryListLoaderContext';
import { GetCountryDataContext } from '../../../../context/GetCountryDataContext';
import { CountryMoreInfoBorderBtns, CountryMoreInfoBox } from './components/CountryMoreInfoBox';
import { generateCountryDetails } from './components/countryDetails/countryDetails';
import { BarsLoader } from '../../../Loaders';

export const CountryMoreInfo = ({ setShowMoreInfo, setInputs, countryID, setCountryID }) => {
	const [selectedCountry, setSelectedCountry] = useState({});
	const [selectedCountryDetails, setSelectedCountryDetails] = useState(null);

	const { toggleLoading } = useContext(CountryListLoaderContext);
	const { countryData } = useContext(GetCountryDataContext);

	const selectCountry = countryID => {
		const foundCountry = countryData.find(data => data.cca3 === countryID);
		if (foundCountry) {
			setSelectedCountry(foundCountry);
		}
	};

	useEffect(() => {
		if (selectedCountry && Object.keys(selectedCountry).length > 0) {
			generateCountryDetails({ country: selectedCountry }).then(details => {
				setSelectedCountryDetails(details);
			});
		}
	}, [selectedCountry, countryID]);

	useEffect(() => {
		if (countryID) {
			const selected = countryData.find(data => data.cca3 === countryID);
			if (selected) {
				setSelectedCountry(selected);
			}
		}
	}, [countryID, countryData]);

	useEffect(() => {
		selectCountry(countryID);
	}, [countryID]);

	const handleBack = () => {
		toggleLoading();
		setShowMoreInfo(false);
		setInputs({ searchCountry: '', continentSelect: '' });
		setCountryID(null);
	};

	return (
		<div className='country-more-info-wrapper'>
			{selectedCountryDetails ? (
				<>
					<img className='country-more-info-flag' src={selectedCountry.flags.png} alt={selectedCountry.flags.alt} />
					<p className='country-more-info-title'>{selectedCountryDetails.countryDetails.name}</p>
					<CountryMoreInfoBox label='Native name' dataSpan={selectedCountryDetails.countryDetails.nativeName} />
					<CountryMoreInfoBox label='Capital' dataSpan={selectedCountryDetails.countryDetails.capital} />
					<CountryMoreInfoBox label='Region' dataSpan={selectedCountryDetails.countryDetails.region} />
					<CountryMoreInfoBox label='Sub region' dataSpan={selectedCountryDetails.countryDetails.subRegion} />
					<CountryMoreInfoBox label='Population' dataSpan={selectedCountryDetails.countryDetails.population} />
					<CountryMoreInfoBox
						label={selectedCountryDetails.titles.currencies}
						dataSpan={selectedCountryDetails.countryDetails.currencies}
					/>
					<CountryMoreInfoBox
						label={selectedCountryDetails.titles.languages}
						dataSpan={selectedCountryDetails.countryDetails.languages}
					/>
					<CountryMoreInfoBox
						label={selectedCountryDetails.titles.topLevelDomain}
						dataSpan={selectedCountryDetails.countryDetails.topLevelDomain}
					/>
					<CountryMoreInfoBox label='Start of the week' dataSpan={selectedCountryDetails.countryDetails.startOfWeek} />
					<CountryMoreInfoBox label={selectedCountryDetails.titles.borders}>
						<CountryMoreInfoBorderBtns selectedCountry={selectedCountry} setCountryID={setCountryID} />
					</CountryMoreInfoBox>
					<button type='button' className='country-more-info-button' onClick={handleBack}>
						home
					</button>
				</>
			) : (
				<BarsLoader />
			)}
		</div>
	);
};
