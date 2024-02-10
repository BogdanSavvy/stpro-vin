'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import styles from '@/styles/features.module.scss';
import Container from '@/components/ui/container';
import { MHeading } from '@/components/ui/heading';
import { textAnimation, cardAnimation } from '@/lib/motion-animations';

const cards = [
	{
		label: 'Надійність',
		image: '/icons/reliability.png',
		alt: 'Іконка - надійність',
		text: `Ми пишаємося нашою надійністю, яка полягає в уважному відношенні до кожного етапу будівельного процесу.`,
	},
	{
		label: 'Якість',
		image: '/icons/quality.png',
		alt: 'Іконка - якість',
		text: `Ви можете очікувати від "STPRO-VIN" тільки найвищу якість робіт, завдяки використанню передових технологій та відбірковим матеріалам.`,
	},
	{
		label: 'Швидкість',
		image: '/icons/speed.png',
		alt: 'Іконка - швидкість',
		text: `Наша команда гнучка та ефективна, гарантуючи швидке виконання робіт без втрати якості.`,
	},
	{
		label: 'Найкраща ціна',
		image: '/icons/price.png',
		alt: 'Іконка - ціна',
		text: `"STPRO-VIN" пропонує конкурентоспроможні ціни без жертви якості, забезпечуючи найвигідніше співвідношення ціна-якість`,
	},
	{
		label: 'Гарантія',
		image: '/icons/guarantee.png',
		alt: 'Іконка - гарантія',
		text: `Ми надаємо гарантію на всі наші роботи, даруючи вам покій та впевненість у стабільності наших конструкцій.`,
	},
	{
		label: 'Задоволення результатом',
		image: '/icons/result.png',
		alt: 'Іконка - результат',
		text: `Ваше задоволення - наша найвища цінність. Ми працюємо для того, щоб кожен клієнт відчував радість від результату спільної роботи.`,
	},
];

function Features() {
	return (
		<motion.section
			initial="hidden"
			whileInView={'visible'}
			viewport={{ amount: 0.3, once: true }}
			className={styles.features}
		>
			<Container>
				<MHeading variants={textAnimation}>Ми гарантуємо</MHeading>
				<motion.div
					initial="hidden"
					whileInView={'visible'}
					viewport={{ amount: 0.2, once: true }}
					className={styles.features__grid}
				>
					{cards.map((card, index) => (
						<motion.article
							custom={index + 1}
							variants={cardAnimation}
							key={index}
							className={styles.features__card}
						>
							<figure className={styles.features__icon}>
								<Image
									src={card.image}
									width={80}
									height={80}
									alt={card.alt}
									className={styles.invert}
								/>
								<figcaption className={styles.features__caption}>
									{card.label}
								</figcaption>
							</figure>
							<p className={styles.features__description}>{card.text}</p>
							<span></span>
						</motion.article>
					))}
				</motion.div>
			</Container>
		</motion.section>
	);
}

export default Features;
