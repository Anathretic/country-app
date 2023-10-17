import { useState } from 'react';

export const useFilterInputs = () => {
	const [inputs, setInputs] = useState({ searchCountry: '', continentSelect: '' });

	const handleInputChange = e => {
		const { name, value } = e.target;
		setInputs(prev => ({ ...prev, [name]: value }));
	};

	return [inputs, setInputs, handleInputChange];
};
