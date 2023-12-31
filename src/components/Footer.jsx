import { IconContext } from 'react-icons';
import { FaGithubSquare, FaLinkedin, FaHome } from 'react-icons/fa';

export const Footer = () => {
	return (
		<footer className='footer'>
			<div className='footer-text'>
				<span>Do you want to see my other projects or repo? Check the links below!</span>
				<div className='footer-icons'>
					<IconContext.Provider value={{ className: 'footer-icon' }}>
						<a href='https://konrad-wojtylo.com' target='_blank' rel='noreferrer'>
							<FaHome />
						</a>
						<a href='https://github.com/Anathretic/country-app' target='_blank' rel='noreferrer'>
							<FaGithubSquare />
						</a>
						<a href='https://www.linkedin.com/in/konrad-wojtylo' target='_blank' rel='noreferrer'>
							<FaLinkedin />
						</a>
					</IconContext.Provider>
				</div>
			</div>
		</footer>
	);
};
