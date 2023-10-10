import { Link } from 'react-router-dom';

export const PageNotFound = () => {
	return (
		<div className='page-not-found'>
			<div className='page-not-found-container'>
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
			</div>
		</div>
	);
};
