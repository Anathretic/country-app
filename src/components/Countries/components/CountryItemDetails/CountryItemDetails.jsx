import { useContext, useEffect, useMemo, useState } from 'react';
import { GetCountryDataContext } from '../../../../context/GetCountryDataContext';
import { CountryItemDetailsBorderBtns, CountryItemDetailsBox } from './components/CountryItemDetailsElements';
import { generateCountryItemDetails } from './components/countryDetails/generateCountryItemDetails';
import { BarsLoader } from '../../../Loaders';

export const CountryItemDetails = ({ setShowDetails, setInputs, countryID, setCountryID }) => {
	const [selectedCountry, setSelectedCountry] = useState({});
	const [selectedCountryDetails, setSelectedCountryDetails] = useState(null);

	const { countryData } = useContext(GetCountryDataContext);

	const selectedCountryMemo = useMemo(() => {
		return countryData.find(data => data.cca3 === countryID);
	}, [countryID, countryData]);

	useEffect(() => {
		if (selectedCountryMemo) {
			setSelectedCountry(selectedCountryMemo);
		}
	}, [selectedCountryMemo]);

	useEffect(() => {
		if (selectedCountry && Object.keys(selectedCountry).length > 0) {
			generateCountryItemDetails({ country: selectedCountry }).then(details => {
				setSelectedCountryDetails(details);
			});
		}
	}, [selectedCountry]);

	const handleBack = () => {
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
