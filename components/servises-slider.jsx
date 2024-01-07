'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/scss';

import Container from '@/components/ui/container';
import MainButton from '@/components/ui/main-button';
import SwiperNavButtons from '@/components/ui/swiper-nav-buttons';
import styles from '@/styles/servises-slider.module.scss';
import Heading from './ui/heading';

function ServisesSlider() {
	return (
		<section className={styles.page}>
			<Container>
				<Swiper
					spaceBetween={300}
					slidesPerView={1}
					modules={[Navigation, Pagination]}
					loop={true}
					pagination={{
						clickable: false,
					}}
					navigation={true}
				>
					<SwiperSlide>
						<article className={styles.slide}>
							<div className={styles.slide__details}>
								<Heading>Машинна стяжка підлоги</Heading>
								<p className={styles.slide__description}>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
									Illum voluptatum cupiditate odio, iure dolor beatae quia illo
									quidem tenetur recusandae provident numquam nisi nostrum
									blanditiis impedit dolores temporibus sequi, sapiente quae
									ratione pariatur ipsam alias voluptate. Nesciunt quas corrupti
									porro.
								</p>
								<MainButton>Детальніше</MainButton>
							</div>
							<figure className={styles.slide__image}>
								<Image
									src={'/screed-machine.png'}
									fill
									alt="slider image screed"
								/>
							</figure>
						</article>
					</SwiperSlide>
					<SwiperSlide>
						<article className={styles.slide}>
							<div className={styles.slide__details}>
								<Heading>Машинна штукатурка стін</Heading>
								<p className={styles.slide__description}>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
									Illum voluptatum cupiditate odio, iure dolor beatae quia illo
									quidem tenetur recusandae provident numquam nisi nostrum
									blanditiis impedit dolores temporibus sequi, sapiente quae
									ratione pariatur ipsam alias voluptate. Nesciunt quas corrupti
									porro.
								</p>
								<MainButton>Детальніше</MainButton>
							</div>
							<figure className={styles.slide__image}>
								<Image
									src={'/plastering-machine.png'}
									fill
									alt="slider image screed"
								/>
							</figure>
						</article>
					</SwiperSlide>
					<SwiperSlide>
						<article className={styles.slide}>
							<div className={styles.slide__details}>
								<Heading>Покрівля дахів</Heading>
								<p className={styles.slide__description}>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
									Illum voluptatum cupiditate odio, iure dolor beatae quia illo
									quidem tenetur recusandae provident numquam nisi nostrum
									blanditiis impedit dolores temporibus sequi, sapiente quae
									ratione pariatur ipsam alias voluptate. Nesciunt quas corrupti
									porro.
								</p>
								<MainButton>Детальніше</MainButton>
							</div>
							<figure className={styles.slide__image}>
								<Image
									src={'/screed-machine.png'}
									fill
									alt="slider image screed"
								/>
							</figure>
						</article>
					</SwiperSlide>

					<SwiperNavButtons />
				</Swiper>
			</Container>
		</section>
	);
}

export default ServisesSlider;
