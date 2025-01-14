import { useContext, useEffect, useState } from 'react';
import { CountryListLoaderContext } from '../../../../context/CountryListLoaderContext';
import { GetCountryDataContext } from '../../../../context/GetCountryDataContext';
import { CountryItemDetailsBorderBtns, CountryItemDetailsBox } from './components/CountryItemDetailsElements';
import { generateCountryItemDetails } from './components/countryDetails/generateCountryItemDetails';
import { BarsLoader } from '../../../Loaders';

export const CountryItemDetails = ({ setShowDetails, setInputs, countryID, setCountryID }) => {
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
			generateCountryItemDetails({ country: selectedCountry }).then(details => {
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
		setShowDetails(false);
		setInputs({ searchCountry: '', continentSelect: '' });
		setCountryID(null);
	};

	return (
		<div className='country-item-details-wrapper'>
			{selectedCountryDetails ? (
				<>
					<img className='country-item-details-flag' src={selectedCountry.flags.png} alt={selectedCountry.flags.alt} />
					<p className='country-item-details-title'>{selectedCountryDetails.countryDetails.name}</p>
					<CountryItemDetailsBox label='Native name' dataSpan={selectedCountryDetails.countryDetails.nativeName} />
					<CountryItemDetailsBox label='Capital' dataSpan={selectedCountryDetails.countryDetails.capital} />
					<CountryItemDetailsBox label='Region' dataSpan={selectedCountryDetails.countryDetails.region} />
					<CountryItemDetailsBox label='Sub region' dataSpan={selectedCountryDetails.countryDetails.subRegion} />
					<CountryItemDetailsBox label='Population' dataSpan={selectedCountryDetails.countryDetails.population} />
					<CountryItemDetailsBox
						label={selectedCountryDetails.titles.currencies}
						dataSpan={selectedCountryDetails.countryDetails.currencies}
					/>
					<CountryItemDetailsBox
						label={selectedCountryDetails.titles.languages}
						dataSpan={selectedCountryDetails.countryDetails.languages}
					/>
					<CountryItemDetailsBox
						label={selectedCountryDetails.titles.topLevelDomain}
						dataSpan={selectedCountryDetails.countryDetails.topLevelDomain}
					/>
					<CountryItemDetailsBox
						label='Start of the week'
						dataSpan={selectedCountryDetails.countryDetails.startOfWeek}
					/>
					<CountryItemDetailsBox label={selectedCountryDetails.titles.borders}>
						<CountryItemDetailsBorderBtns selectedCountry={selectedCountry} setCountryID={setCountryID} />
					</CountryItemDetailsBox>
					<button type='button' className='country-item-details-button' onClick={handleBack}>
						home
					</button>
				</>
			) : (
				<BarsLoader />
			)}
		</div>
	);
};
