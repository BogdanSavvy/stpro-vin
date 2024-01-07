"use client"

import { useSwiper } from 'swiper/react';

import styles from '@/styles/swiper-nav-buttons.module.scss';

function SwiperNavButtons() {
	const swiper = useSwiper();

	return (
		<div className={styles.sliderActions}>
			<button
				onClick={() => swiper.slideNext()}
				className={styles.sliderActions__nextButton}
			>
				<p>наступний</p>
				<span></span>
			</button>
			<button
				onClick={() => swiper.slidePrev()}
				className={styles.sliderActions__prevButton}
			>
				<span></span>
				<p>попередній</p>
			</button>
		</div>
	);
}

export default SwiperNavButtons;
