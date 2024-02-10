'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import styles from '@/styles/about-us.module.scss';
import Container from '@/components/ui/container';
import { MHeading } from '@/components/ui/heading';
import { textAnimation, achivmentsAnimation } from '@/lib/motion-animations';

function AboutUs() {
	return (
		<motion.section
			initial="hidden"
			whileInView="visible"
			viewport={{ amount: 0.4, once: true }}
			className={styles.aboutUs}
		>
			<Container>
				<MHeading custom={1} variants={textAnimation}>
					Про нас
				</MHeading>
				<div className={styles.aboutUs__body}>
					<motion.article
						custom={2}
						variants={textAnimation}
						className={styles.aboutUs__details}
					>
						<p className={styles.aboutUs__description}>
							"STPRO-VIN" - це більше, ніж просто будівельна компанія; ми - ваш
							надійний партнер у сфері створення комфортних та міцних просторів.
							З 9-річним досвідом у будівельній справі, ми пропонуємо
							високоякісні послуги, включаючи машинну напівсуху стяжку,
							інноваційну покрівлю методом розуклонів та машинну штукатурку
							стін.
						</p>
						<p className={styles.aboutUs__description}>
							Наша місія - перевершувати очікування клієнтів, забезпечуючи не
							лише бездоганну якість робіт, але і персоналізований підхід до
							кожного завдання. Ми дбаємо про кожну деталь, працюючи з
							інноваційними технологіями та враховуючи ваші унікальні потреби.
						</p>
						<p className={styles.aboutUs__description}>
							Обирайте "STPRO-VIN" для надійних та ефективних будівельних
							рішень, які перетворять ваші ідеї в реальність.
						</p>
					</motion.article>
					<motion.div
						custom={2}
						variants={achivmentsAnimation}
						className={styles.aboutUs__grid}
					>
						<div className={styles.aboutUs__gridChild}>
							9+ <br /> <span>років</span>
						</div>
						<div className={styles.aboutUs__gridChild}>
							1500+ <br /> <span>клієнтів</span>
						</div>
						<figure className={styles.aboutUs__gridChild}>
							<Image
								fill
								src="/images/rozuklon_4.jpg"
								alt="Покрівля поверхні басейну методом розуклонів"
								sizes="50vw"
							/>
						</figure>
						<figure className={styles.aboutUs__gridChild}>
							<Image
								fill
								src="/images/styazhka_work_1.jpg"
								alt="Напівсуха стяжка підлоги в роботі"
								sizes="50vw"
							/>
						</figure>
						<div className={styles.aboutUs__gridChild}>
							50K+ <br />
							<span>
								м<sup>2</sup>
							</span>
						</div>
					</motion.div>
				</div>
			</Container>
		</motion.section>
	);
}

export default AboutUs;
