'use client';
import { motion } from 'framer-motion';

import styles from '@/styles/why-we.module.scss';
import Container from '@/components/ui/container';
import { MHeading } from '@/components/ui/heading';
import {
	sectionAnimation,
	textAnimation,
	cardAnimation,
} from '@/lib/motion-animations';

function WhyWe() {
	return (
		<motion.section
			initial="hidden"
			whileInView="visible"
			variants={sectionAnimation}
			viewport={{ amount: 0.3, once: true }}
			className={styles.whyWe}
		>
			<Container>
				<MHeading custom={1} variants={textAnimation}>
					Чому слід обирати нас?
				</MHeading>
				<div className={styles.whyWe__body}>
					<motion.article
						custom={2}
						variants={cardAnimation}
						className={styles.whyWe__card}
					>
						<h4 className={styles.whyWe__cardTitle}>Професіоналізм</h4>
						<p className={styles.whyWe__cardDescription}>
							Наша команда складається з досвідчених фахівців, готових взятися
							за будь-яке завдання. Ми маємо репутацію надійного партнера, який
							доводить свою компетентність кожним завершеним проектом.
						</p>
					</motion.article>
					<motion.article
						custom={3}
						variants={cardAnimation}
						className={styles.whyWe__card}
					>
						<h4 className={styles.whyWe__cardTitle}>Якість та Інновації</h4>
						<p className={styles.whyWe__cardDescription}>
							Ми прагнемо до вищих стандартів якості в усьому, що робимо.
							Використовуючи передові технології та вибіркові матеріали, ми
							гарантуємо вам високоякісні та тривалі результати.
						</p>
					</motion.article>
					<motion.article
						custom={4}
						variants={cardAnimation}
						className={styles.whyWe__card}
					>
						<h4 className={styles.whyWe__cardTitle}>Індивідуальний Підхід</h4>
						<p className={styles.whyWe__cardDescription}>
							Ми розуміємо, що кожен проект унікальний. Наші експерти працюють
							із задачами будь-якої складності та завжди готові адаптуватися до
							вашого бачення.
						</p>
					</motion.article>
				</div>
			</Container>
		</motion.section>
	);
}

export default WhyWe;
