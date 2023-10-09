import { IconContext } from 'react-icons';
import { FaGlobeEurope, FaMoon, FaSun } from 'react-icons/fa';

export const Header = ({ setDarkMode, darkMode }) => {
	const handleDarkMode = () => {
		if (!darkMode) {
			setDarkMode(true);
		} else {
			setDarkMode(false);
		}
	};

	return (
		<header className='header'>
			<div className='header-content'>
				<h1 className='header-title'>
					<IconContext.Provider value={{ className: 'header-title-icon' }}>
						<FaGlobeEurope fontSize='32px' />
					</IconContext.Provider>
					Countrypedia
				</h1>
				<button type='button' onClick={handleDarkMode} className='dark-mode-btn'>
					<IconContext.Provider value={{ className: 'dark-mode-btn-icon' }}>
						{darkMode ? <FaSun fontSize='24px' /> : <FaMoon fontSize='24px' />}
					</IconContext.Provider>
				</button>
			</div>
		</header>
	);
};
