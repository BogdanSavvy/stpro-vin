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
import Link from 'next/link';

const slides = [
	{
		image: '/images/styazhka_6.jpg',
		alt: 'Машинна стяжка 2',
	},
	{
		image: '/images/plaster_1.jpg',
		alt: 'Машинна штукатурка - до',
	},
	{
		image: '/images/styazhka_2.jpg',
		alt: 'Машинна стяжка 1',
	},
	{
		image: '/images/rozuklon_3.jpg',
		alt: 'Розуклонка поверхні басейну 1',
	},
	{
		image: '/images/styazhka_work_2.jpg',
		alt: 'Машинна стяжка процес роботи - 1',
	},
	{
		image: '/images/plaster_2.jpg',
		alt: 'Машинна штукатурка - після',
	},
];

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
						{slides.map((slide, index) => (
							<SwiperSlide key={index}>
								<figure className={styles.galleryBanner__slide}>
									<Image fill src={slide.image} alt={slide.alt} sizes="50vw" />
									<Link href="/portfolio">Більше</Link>
								</figure>
							</SwiperSlide>
						))}
					</Swiper>
				</motion.div>
			</Container>
		</motion.section>
	);
}

export default GalleryBanner;
