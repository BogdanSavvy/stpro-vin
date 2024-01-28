'use client';

import { motion } from 'framer-motion';

import styles from '@/styles/why-we.module.scss';
import Container from '@/components/ui/container';
import { MHeading } from '@/components/ui/heading';
import { textAnimation, cardAnimation } from '@/lib/motion-animations';

const cards = [
	{
		heading: 'Професіоналізм',
		description: `Наша команда складається з досвідчених фахівців, готових взятися
		за будь-яке завдання. Ми маємо репутацію надійного партнера, який
		доводить свою компетентність кожним завершеним проектом.`,
	},
	{
		heading: 'Якість та Інновації',
		description: `Ми прагнемо до вищих стандартів якості в усьому, що робимо.
		Використовуючи передові технології та вибіркові матеріали, ми
		гарантуємо вам високоякісні та тривалі результати.`,
	},
	{
		heading: 'Індивідуальний Підхід',
		description: `Ми розуміємо, що кожен проект унікальний. Наші експерти працюють
		із задачами будь-якої складності та завжди готові адаптуватися до
		вашого бачення.`,
	},
];

function WhyWe() {
	return (
		<motion.section
			initial="hidden"
			whileInView="visible"
			viewport={{ amount: 0.3, once: true }}
			className={styles.whyWe}
		>
			<Container>
				<MHeading custom={1} variants={textAnimation}>
					Чому слід обирати нас?
				</MHeading>
				<div className={styles.whyWe__body}>
					{cards.map((card, index) => (
						<motion.article
							custom={index + 1}
							variants={cardAnimation}
							className={styles.whyWe__card}
							key={index}
						>
							<h4 className={styles.whyWe__cardTitle}>{card.heading}</h4>
							<p className={styles.whyWe__cardDescription}>
								{card.description}
							</p>
						</motion.article>
					))}
				</div>
			</Container>
		</motion.section>
	);
}

export default WhyWe;
