'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/scss';

import styles from '@/styles/servises-slider.module.scss';
import Container from '@/components/ui/container';
import MainButton from '@/components/ui/main-button';
import SwiperNavButtons from '@/components/ui/swiper-nav-buttons';
import Heading from '@/components/ui/heading';

const servises = [
	{
		header: 'Машинна стяжка підлоги',
		description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
		Illum voluptatum cupiditate odio, iure dolor beatae quia illo
		quidem tenetur recusandae provident numquam nisi nostrum
		blanditiis impedit dolores temporibus sequi, sapiente quae
		ratione pariatur ipsam alias voluptate. Nesciunt quas corrupti
		porro.`,
		image: '/screed-machine.png',
		href: '/servises/screed',
	},
	{
		header: 'Машинна штукарка стін',
		description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
		Illum voluptatum cupiditate odio, iure dolor beatae quia illo
		quidem tenetur recusandae provident numquam nisi nostrum
		blanditiis impedit dolores temporibus sequi, sapiente quae
		ratione pariatur ipsam alias voluptate. Nesciunt quas corrupti
		porro.`,
		image: '/plastering-machine.png',
		href: '/servises/plaster',
	},
	{
		header: 'Покрівля дахів',
		description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
		Illum voluptatum cupiditate odio, iure dolor beatae quia illo
		quidem tenetur recusandae provident numquam nisi nostrum
		blanditiis impedit dolores temporibus sequi, sapiente quae
		ratione pariatur ipsam alias voluptate. Nesciunt quas corrupti
		porro.`,
		image: '/screed-machine.png',
		href: '/servises/roofing',
	},
];

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
					{servises.map((servise, index) => (
						<SwiperSlide key={index}>
							<article className={styles.slide}>
								<div className={styles.slide__details}>
									<Heading>{servise.header}</Heading>
									<p className={styles.slide__description}>
										{servise.description}
									</p>
									<MainButton>
										<Link href={servise.href}>Детальніше</Link>
									</MainButton>
								</div>
								<figure className={styles.slide__image}>
									<Image
										src={servise.image}
										fill
										alt="slider image screed"
										sizes="100%"
									/>
								</figure>
							</article>
						</SwiperSlide>
					))}
					<SwiperNavButtons />
				</Swiper>
			</Container>
		</section>
	);
}

export default ServisesSlider;
