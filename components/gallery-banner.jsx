'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Keyboard, EffectCoverflow } from 'swiper/modules';
import 'swiper/scss';

import styles from '@/styles/gallery-banner.module.scss';
import Container from '@/components/ui/container';

function GalleryBanner() {
	return (
		<section className={styles.galleryBanner}>
			<Container>
				<h3>Наші роботи</h3>
				<div className={styles.galleryBanner__slider}>
					<Swiper
						// effect={'coverflow'}
						// coverflowEffect={{
						// 	rotate: 20,
						// 	stretch: 0,
						// 	depth: 80,
						// 	modifier: 1,
						// 	slideShadows: false,
						// }}
						modules={[Autoplay, Keyboard, EffectCoverflow]}
						pagination={{ clickable: true }}
						keyboard={{
							enabled: true,
						}}
						centeredSlides={true}
						spaceBetween={30}
						slidesPerView={'auto'}
						breakpoints={{
							425: {
								slidesPerView: 1,
								spaceBetween: 0,
							},
							768: {
								slidesPerView: 2,
								spaceBetween: 0,
							},
							1024: {
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
								<Image fill src="/hero_2.webp" alt="miniGalery image" />
								<button>btn</button>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className={styles.galleryBanner__slide}>
								<Image fill src="/hero_2.webp" alt="miniGalery image" />
								<button>btn</button>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className={styles.galleryBanner__slide}>
								<Image fill src="/hero_2.webp" alt="miniGalery image" />
								<button>btn</button>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className={styles.galleryBanner__slide}>
								<Image fill src="/hero_2.webp" alt="miniGalery image" />
								<button>btn</button>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className={styles.galleryBanner__slide}>
								<Image fill src="/hero_2.webp" alt="miniGalery image" />
								<button>btn</button>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className={styles.galleryBanner__slide}>
								<Image fill src="/hero_2.webp" alt="miniGalery image" />
								<button>btn</button>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
			</Container>
		</section>
	);
}

export default GalleryBanner;
