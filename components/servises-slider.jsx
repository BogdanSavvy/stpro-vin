'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';
import 'swiper/scss';

import styles from '@/styles/servises-slider.module.scss';
import Container from '@/components/ui/container';
import SwiperNavButtons from '@/components/ui/swiper-nav-buttons';
import { MMainButton } from '@/components/ui/main-button';
import { MHeading } from '@/components/ui/heading';
import {
	sectionAnimation,
	swiperSlideAnimation,
	swiperFadeAnimation,
} from '@/lib/motion-animations';

const servises = [
	{
		header: 'Машинна стяжка підлоги',
		description: `Наша машинна напівсуха стяжка підлоги - це високоефективне рішення для створення стійкого та рівного підлогового покриття. 
		Завдяки передовим технологіям та досвіду наших фахівців, ми гарантуємо точність, швидкість та високу якість виконання робіт. 
		Довірте нам створення ідеальної основи для вашого простору, де комфорт і міцність зливаються в єдиний гармонійний результат.`,
		price: '280',
		image: '/screed-machine.png',
		href: '/servises/screed',
	},
	{
		header: 'Машинна штукарка стін',
		description: `
		Машинна штукатурка – це швидкий, ефективний та бездоганний спосіб надати вашим приміщенням вишуканий імідж. 
		Ми використовуємо тільки найсучасніші матеріали та технології, гарантуючи високу якість та довговічність наших робіт. 
		Довірте нам створення стін, які відзначаються не лише бездоганною текстурою, але й вираженою індивідуальністю вашого простору.`,
		price: '330',
		image: '/plastering-machine.png',
		href: '/servises/plaster',
	},
	{
		header: 'Покрівля дахів',
		description: `З задоволенням пропонуємо вам послуги покрівлі дахів за інноваційним методом розуклонів. 
		Метод розуклонів дозволяє створити довговічний та стійкий до впливу часу дах, забезпечуючи ефективний відведення води та максимальний захист вашого житла. 
		Ми прагнемо до ідеальності в кожній деталі, надаючи вам не лише надійний дах, 
		але і естетично виглядний елемент вашої будівлі. `,
		price: '260',
		image: '/screed-machine.png',
		href: '/servises/roofing',
	},
];

function ServisesSlider() {
	return (
		<motion.section
			initial="hidden"
			whileInView="visible"
			viewport={{ amount: 0.4, once: true }}
			variants={sectionAnimation}
			className={styles.section}
		>
			<Container>
				<AnimatePresence>
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
								{({ isActive }) => (
									<article className={styles.slide}>
										<div className={styles.slide__details}>
											<MHeading
												{...swiperSlideAnimation(isActive, 'left', 0.5)}
											>
												{servise.header}
											</MHeading>
											<motion.p
												{...swiperSlideAnimation(isActive, 'left', 1)}
												className={styles.slide__description}
											>
												{servise.description}
											</motion.p>
											<MMainButton
												{...swiperSlideAnimation(isActive, 'down', 2)}
											>
												<Link href={servise.href}>Детальніше</Link>
											</MMainButton>
										</div>
										<motion.figure
											{...swiperFadeAnimation(isActive, 2)}
											className={styles.slide__image}
										>
											<Image
												src={servise.image}
												fill
												alt="slider image screed"
												sizes="100%"
											/>
											<motion.figcaption
												{...swiperFadeAnimation(isActive, 3)}
												className={styles.slide__price}
											>
												{servise.price} грн/м<sup>2</sup>
											</motion.figcaption>
										</motion.figure>
									</article>
								)}
							</SwiperSlide>
						))}
						<SwiperNavButtons />
					</Swiper>
				</AnimatePresence>
			</Container>
		</motion.section>
	);
}

export default ServisesSlider;
