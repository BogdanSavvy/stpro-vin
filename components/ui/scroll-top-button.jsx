'use client';

import { useState, useEffect } from 'react';
import DoubleArrowOutlinedIcon from '@mui/icons-material/DoubleArrowOutlined';
import { Tooltip } from '@mui/material';

import styles from '@/styles/scroll-top-button.module.scss';

const ScrollTopButton = () => {
	const [show, setShow] = useState(false);

	const scrollTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	const handleShowButton = () => {
		if (window.scrollY >= 100) {
			setShow(true);
		} else {
			setShow(false);
		}
	};

	useEffect(() => {
		const scrollDistance = window.scrollY || document.documentElement.scrollTop;
		if (scrollDistance !== 0) {
			setShow(true);
		}

		window.addEventListener('scroll', handleShowButton, { passive: true });
	}, []);

	return (
		<Tooltip title="Вгору" placement="top" arrow>
			<button
				onClick={scrollTop}
				className={`${styles.scrollTopBtn} ${show ? styles.showButon : ''}`}
			>
				<span>
					<DoubleArrowOutlinedIcon
						style={{ transform: 'rotate(-90deg)' }}
						fontSize="large"
					/>
				</span>
			</button>
		</Tooltip>
	);
};

export default ScrollTopButton;
