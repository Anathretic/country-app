import { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';

import { IconContext } from 'react-icons';
import { BsGlobe } from 'react-icons/bs';
import { GiMoonBats, GiSun } from 'react-icons/gi';

export const Header = () => {
	const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

	return (
		<header className='header'>
			<div className='header-content'>
				<h1 className='header-title'>
					<IconContext.Provider value={{ className: 'header-title-icon' }}>
						<BsGlobe fontSize='32px' />
					</IconContext.Provider>
					Countrypedia
				</h1>
				<button type='button' onClick={toggleDarkMode} className='dark-mode-btn'>
					<IconContext.Provider value={{ className: 'dark-mode-btn-icon' }}>
						{darkMode ? <GiSun fontSize='28px' /> : <GiMoonBats fontSize='28px' />}
					</IconContext.Provider>
				</button>
			</div>
		</header>
	);
};
