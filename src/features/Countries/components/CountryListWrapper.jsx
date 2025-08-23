import { Helmet } from 'react-helmet-async';

export const CountryListWrapper = ({ children }) => {
	return (
		<>
			<Helmet htmlAttributes={{ lang: 'en' }}>
				<title>Countrypedia</title>
				<meta
					name='description'
					content='Do you want to check some country population? Or maybe you are interested in the current currency? We have answer for your questions!'
				/>
				<meta
					name='keywords'
					content='country information, population, current currency, official language, state flag'
				/>
				<meta property='og:title' content='Countrypedia' />
				<meta
					property='og:description'
					content='Explore detailed information about countries – population, currency, language, and more.'
				/>
				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://countrypedia-project.vercel.app/' />
				<link rel='canonical' href='https://countrypedia-project.vercel.app/' />
			</Helmet>
			<main>{children}</main>
		</>
	);
};
