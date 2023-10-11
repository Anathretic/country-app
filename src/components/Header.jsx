import { IconContext } from 'react-icons';
import { BsGlobe } from 'react-icons/bs';
import { GiWorld, GiMoonBats, GiSun } from 'react-icons/gi';

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
						<BsGlobe fontSize='32px' />
					</IconContext.Provider>
					Countrypedia
				</h1>
				<button type='button' onClick={handleDarkMode} className='dark-mode-btn'>
					<IconContext.Provider value={{ className: 'dark-mode-btn-icon' }}>
						{darkMode ? <GiSun fontSize='28px' /> : <GiMoonBats fontSize='28px' />}
					</IconContext.Provider>
				</button>
			</div>
		</header>
	);
};
