'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Keyboard, EffectCoverflow } from 'swiper/modules';
import 'swiper/scss';

import styles from '@/styles/gallery-banner.module.scss';
import Container from '@/components/ui/container';
import {
	sectionAnimation,
	sliderAnimation,
	textAnimation,
} from '@/lib/motion-animations';

function GalleryBanner() {
	return (
		<motion.section
			initial="hidden"
			whileInView="visible"
			viewport={{ amount: 0.4, once: true }}
			variants={sectionAnimation}
			className={styles.galleryBanner}
		>
			<Container>
				<motion.h3 variants={textAnimation}>Наші роботи</motion.h3>
				<motion.div
					variants={sliderAnimation}
					className={styles.galleryBanner__slider}
				>
					<Swiper
						effect={'coverflow'}
						coverflowEffect={{
							rotate: 30,
							stretch: 0,
							depth: 90,
							modifier: 1,
							slideShadows: false,
						}}
						centeredSlides={true}
						modules={[Autoplay, Keyboard, EffectCoverflow]}
						pagination={{ clickable: true }}
						keyboard={{
							enabled: true,
						}}
						slidesPerView={1}
						breakpoints={{
							425: {
								slidesPerView: 2,
								spaceBetween: 0,
							},
							768: {
								slidesPerView: 3,
								spaceBetween: 15,
							},
							1024: {
								slidesPerView: 3,
								spaceBetween: 30,
							},
							1280: {
								slidesPerView: 4,
								spaceBetween: 30,
							},
						}}
						autoplay={{
							delay: 3000,
							disableOnInteraction: true,
						}}
						loop={true}
					>
						<SwiperSlide>
							<div className={styles.galleryBanner__slide}>
								<Image
									fill
									src="/hero_2.webp"
									alt="miniGalery image"
									sizes="100%"
								/>
								<button>Більше</button>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className={styles.galleryBanner__slide}>
								<Image
									fill
									src="/hero_2.webp"
									alt="miniGalery image"
									sizes="100%"
								/>
								<button>Більше</button>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className={styles.galleryBanner__slide}>
								<Image
									fill
									src="/hero_2.webp"
									alt="miniGalery image"
									sizes="100%"
								/>
								<button>Більше</button>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className={styles.galleryBanner__slide}>
								<Image
									fill
									src="/hero_2.webp"
									alt="miniGalery image"
									sizes="100%"
								/>
								<button>Більше</button>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className={styles.galleryBanner__slide}>
								<Image
									fill
									src="/hero_2.webp"
									alt="miniGalery image"
									sizes="100%"
								/>
								<button>Більше</button>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className={styles.galleryBanner__slide}>
								<Image
									fill
									src="/hero_2.webp"
									alt="miniGalery image"
									sizes="100%"
								/>
								<button>Більше</button>
							</div>
						</SwiperSlide>
					</Swiper>
				</motion.div>
			</Container>
		</motion.section>
	);
}

export default GalleryBanner;
