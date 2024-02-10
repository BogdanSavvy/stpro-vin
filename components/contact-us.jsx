'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

import styles from '@/styles/contact-us.module.scss';
import Container from '@/components/ui/container';
import { MHeading } from '@/components/ui/heading';
import ContactUsForm from '@/components/contact-us-form';
import { sectionAnimation, textAnimation } from '@/lib/motion-animations';

function ContatUs() {
	return (
		<motion.section
			initial="hidden"
			whileInView="visible"
			viewport={{ amount: 0.3, once: true }}
			variants={sectionAnimation}
			className={styles.contactUs}
		>
			<Container>
				<div className={styles.contactUs__container}>
					<article className={styles.contactUs__details}>
						<section className={styles.contactUs__text}>
							<MHeading variants={textAnimation}>
								Замовити консультацію
							</MHeading>
							<motion.p custom={1} variants={textAnimation}>
								Ми завжди готові допомогти вам з ваший будівельним проектом!
								Заповніть форму і наші експерти зв'яжуться з вами найближчим
								часом, щоб надати детальну консультацію по питанням які Вас
								цікавлять.
							</motion.p>
							<motion.p custom={1} variants={textAnimation}>
								Не вагайтеся звертатися до нас з будь-якими питаннями, або для
								отримання додаткової інформації. Наша команда готова надати вам
								кваліфіковану підтримку та забезпечити успішну реалізацію вашого
								будівельного проекту. Також можете зателефонувати нам самостійно
								використовуючі наші контактні номери нижче.
							</motion.p>
						</section>
						<section className={styles.contactUs__cards}>
							<motion.article
								custom={2}
								variants={textAnimation}
								className={styles.card}
							>
								<figure className={styles.card__figure}>
									<Image
										width={60}
										height={60}
										src="/icons/phone.png"
										alt="Іконка - телефон"
									/>
								</figure>
								<div className={styles.card__contacts}>
									<Link href="tel:+380937330167">+38 (093) 733 0167</Link>
									<Link href="tel:+380930582222">+38 (093) 058 2222</Link>
								</div>
							</motion.article>
							<motion.article
								custom={3}
								variants={textAnimation}
								className={styles.card}
							>
								<figure className={styles.card__figure}>
									<Image
										width={60}
										height={60}
										src="/icons/email.png"
										alt="Іконка - пошта"
									/>
								</figure>
								<div className={styles.card__contacts}>
									<Link href="mailto:Styazhkaprovin@gmail.com">
										Styazhkaprovin@gmail.com
									</Link>
								</div>
							</motion.article>
						</section>
					</article>
					<ContactUsForm />
				</div>
			</Container>
		</motion.section>
	);
}

export default ContatUs;
