'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import { MHeading } from '@/components/ui/heading';
import styles from '@/styles/detail.module.scss';
import { textAnimation, cardAnimation } from '@/lib/motion-animations';

function Detail({ children, heading, image, reversed }) {
	return (
		<motion.article
			initial="hidden"
			whileInView="visible"
			viewport={{ amount: 0.3, once: true }}
			className={styles.detail}
		>
			<MHeading variants={textAnimation}>{heading}</MHeading>
			<div
				className={`${
					!reversed ? styles.detail__body : styles.detail__bodyReversed
				}`}
			>
				<motion.div
					custom={1}
					variants={textAnimation}
					className={styles.detail__description}
				>
					{children}
				</motion.div>
				{image && (
					<motion.figure
						custom={2}
						variants={cardAnimation}
						className={styles.detail__image}
					>
						<Image fill src={image} alt={'about_image'} sizes="100vw" />
					</motion.figure>
				)}
			</div>
		</motion.article>
	);
}

export default Detail;
