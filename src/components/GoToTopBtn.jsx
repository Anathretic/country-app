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

	useEffect(() => {
		window.addEventListener('scroll', handleToTheTopBtn);

		return () => {
			window.addEventListener('scroll', handleToTheTopBtn);
		};
	}, []);

	const scrollToTop = () => {
		window.scrollTo(0, 0);
	};

	return (
		<button type='button' className={`go-to-top-btn ${buttonVisibility && 'active-btn'}`} onClick={scrollToTop}>
			<BsChevronDoubleUp />
		</button>
	);
};
