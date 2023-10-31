import { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';

import { Bars, Circles } from 'react-loader-spinner';

export const BarsLoader = () => {
	const { darkMode } = useContext(DarkModeContext);

	return (
		<Bars
			height={150}
			width={150}
			color={darkMode ? '#f5f5f5' : '#111517'}
			ariaLabel='bars-loading'
			wrapperClass='app-loader-wrapper'
			visible={true}
		/>
	);
};

export const CirclesLoader = () => {
	const { darkMode } = useContext(DarkModeContext);

	return (
		<Circles
			height={80}
			width={80}
			color={darkMode ? '#f5f5f5' : '#111517'}
			ariaLabel='circles-loading'
			wrapperClass='country-more-info-flag-loader'
			visible={true}
		/>
	);
};
