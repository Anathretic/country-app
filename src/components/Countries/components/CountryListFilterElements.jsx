import { FaSearch } from 'react-icons/fa';

export const CountryListInputFilterElement = ({ value, onChange, ...otherInputProps }) => {
	return (
		<>
			<input
				type='text'
				name='searchCountry'
				placeholder='Search..'
				value={value}
				onChange={onChange}
				{...otherInputProps}
			/>
			<span className='country-list-search-icon'>
				<FaSearch />
			</span>
		</>
	);
};

export const CountryListSelectFilterElement = ({ value, onChange, ...otherSelectProps }) => {
	return (
		<select name='continentSelect' value={value} onChange={onChange} {...otherSelectProps}>
			<option value=''>All countries</option>
			<option value='africa'>Africa</option>
			<option value='antarctica'>Antarctica</option>
			<option value='asia'>Asia</option>
			<option value='europe'>Europe</option>
			<option value='north america'>North America</option>
			<option value='oceania'>Oceania</option>
			<option value='south america'>South America</option>
		</select>
	);
};
