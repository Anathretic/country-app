import { useContext } from 'react';
import { Bars, Circles } from 'react-loader-spinner';
import { DarkModeContext } from '../context/DarkModeContext';

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
			height={60}
			width={60}
			color={darkMode ? '#f5f5f5' : '#111517'}
			ariaLabel='circles-loading'
			wrapperClass='country-item-loader-wrapper'
			visible={true}
		/>
	);
};
