import { Bars } from 'react-loader-spinner';

export const BarsLoader = () => {
	return (
		<Bars
			height={150}
			width={150}
			color='#111517'
			ariaLabel='bars-loading'
			wrapperClass='app-loader-wrapper'
			visible={true}
		/>
	);
};
