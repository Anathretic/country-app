import { useEffect, useState } from 'react';
import { BsChevronDoubleUp } from 'react-icons/bs';

export const GoToTopBtn = () => {
	const [buttonVisibility, setButtonVisibility] = useState(false);

	const handleToTheTopBtn = () => {
		const scrollPosition = window.innerHeight + window.scrollY;
		const pageHeight = document.body.offsetHeight - 100;

		if (window.scrollY > 100 && scrollPosition < pageHeight) {
			setButtonVisibility(true);
		} else if (scrollPosition >= pageHeight) {
			setButtonVisibility(false);
		} else {
			setButtonVisibility(false);
		}
	};

	const scrollToTop = () => {
		window.scrollTo(0, 0);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleToTheTopBtn);

		return () => {
			window.removeEventListener('scroll', handleToTheTopBtn);
		};
	}, []);

	return (
		<button type='button' className={`go-to-top-btn ${buttonVisibility && 'active-btn'}`} onClick={scrollToTop}>
			<BsChevronDoubleUp />
		</button>
	);
};
