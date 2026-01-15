import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export const PageNotFound = () => {
	const currentUrl = window.location.href;

	return (
		<>
			<Helmet htmlAttributes={{ lang: 'en' }}>
				<title>Page not found | Countrypedia</title>
				<meta
					name='description'
					content='The page you are looking for could not be found. Please check the URL or return to the Countrypedia homepage.'
				/>
				<meta property='og:title' content='Page not found | Countrypedia' />
				<meta
					property='og:description'
					content='This page could not be found. Go back to the Countrypedia homepage and explore countries around the world.'
				/>
				<meta property='og:type' content='website' />
				<meta property='og:url' content={currentUrl} />
				<meta name='robots' content='noindex, nofollow' />
			</Helmet>
			<main className='page-not-found'>
				<section className='page-not-found-container'>
					<img src='/notfound-img.png' alt='Error-404 image' />
					<p className='page-not-found-credits'>
						Error 404 image by{' '}
						<a href='https://storyset.com/web' target='_blank' rel='noreferrer'>
							Storyset
						</a>
						.
					</p>
					<Link to='/' className='page-not-found-btn'>
						home
					</Link>
				</section>
			</main>
		</>
	);
};
