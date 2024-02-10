'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import styles from '@/styles/hero.module.scss';
import Container from '@/components/ui/container';
import { textAnimation, heroFrameAnimation } from '@/lib/motion-animations';

function Hero({ imageUrl }) {
	return (
		<section className={styles.hero}>
			<Container>
				<motion.article
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={heroFrameAnimation}
					className={styles.greetings}
				>
					<motion.h1
						variants={textAnimation}
						custom={1}
						className={styles.greetings__title}
					>
						Вас вітає <br className={styles.br} /> STPRO-VIN
					</motion.h1>
					<motion.p
						variants={textAnimation}
						custom={2}
						className={styles.greetings__description}
					>
						"Ваша Майстерня Якісного Будівництва – Творимо Комфорт і Інновації
						Разом!"
					</motion.p>
				</motion.article>
			</Container>
			<Image
				fill
				priority={true}
				src={imageUrl}
				alt="STPRO-VIN - плакат"
				sizes="100vw"
			/>
		</section>
	);
}

export default Hero;
