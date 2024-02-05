'use client';

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
				<span className={styles.inscription}>наступний</span>
				<span className={styles.nextArrow}></span>
			</button>
			<button
				onClick={() => swiper.slidePrev()}
				className={styles.sliderActions__prevButton}
			>
				<span className={styles.prevArrow}></span>
				<span className={styles.inscription}>попередній</span>
			</button>
		</div>
	);
}

export default SwiperNavButtons;
