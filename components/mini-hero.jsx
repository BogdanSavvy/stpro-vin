'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import styles from '@/styles/mini-hero.module.scss';
import Container from '@/components/ui/container';
import { textAnimation, miniHeroAnimation } from '@/lib/motion-animations';

function MiniHero({ heading, description, image }) {
	return (
		<motion.section
			initial="hidden"
			whileInView="visible"
			variants={miniHeroAnimation}
			viewport={{ once: true }}
			className={styles.miniHero}
		>
			<Container>
				<article className={styles.miniHero__details}>
					<motion.h1
						custom={1}
						variants={textAnimation}
						className={styles.miniHero__heading}
					>
						{heading}
					</motion.h1>
					<motion.p
						custom={2}
						variants={textAnimation}
						className={styles.miniHero__description}
					>
						{description}
					</motion.p>
				</article>
			</Container>
			<Image
				fill
				priority={true}
				src={image}
				alt="minihero_image"
				sizes="100vw"
			/>
		</motion.section>
	);
}

export default MiniHero;
