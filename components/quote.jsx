'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import styles from '@/styles/quote.module.scss';
import Container from '@/components/ui/container';
import { textAnimation, bannerAnimation } from '@/lib/motion-animations';

function Quote({ children, autor, image, style }) {
	return (
		<motion.section
			initial="hidden"
			whileInView="visible"
			viewport={{ amount: 0.3, once: true }}
			className={styles.blockquote}
			style={style}
		>
			<Container>
				<div className={styles.blockquote__wrapper}>
					<motion.figure
						custom={1}
						variants={textAnimation}
						className={styles.blockquote__octogon}
					>
						<Image fill src={image} alt="quote_image" sizes="100%" />
					</motion.figure>
					<motion.blockquote
						variants={bannerAnimation}
						className={styles.blockquote__quote}
					>
						<p>{children}</p>
						<motion.h5 custom={2} variants={textAnimation}>
							&mdash; {autor}
						</motion.h5>
					</motion.blockquote>
				</div>
			</Container>
		</motion.section>
	);
}

export default Quote;
