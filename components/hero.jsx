import Image from 'next/image';

import styles from '@/styles/hero.module.scss';
import Container from './ui/container';

function Hero({ imageUrl }) {
	return (
		<section className={styles.hero}>
			<Container>
				<article className={styles.greetings}>
					<h1 className={styles.greetings__title}>
						Вас вітає <br className={styles.br} /> STPRO-VIN
					</h1>
					<p className={styles.greetings__description}>
						Ідеально рівні підлоги та стіни під ключ у Вінниці
					</p>
				</article>
			</Container>
			{/* <article className={styles.table}>
				<div className={styles.table__body}>
					<div className={styles.table__card}>ЧАСИ РОБОТИ</div>
					<div className={styles.table__card}>НОМЕРА ТЕЛЕФОНУ</div>
					<div className={styles.table__card}>МІСЦЕ РОБОТИ</div>
				</div>
			</article> */}
			<Image fill src={imageUrl} alt="Hero poster" sizes="100%" />
		</section>
	);
}

export default Hero;
