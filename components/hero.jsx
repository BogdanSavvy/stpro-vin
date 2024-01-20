import Image from 'next/image';

import styles from '@/styles/hero.module.scss';
import Container from './ui/container';

function Hero({ imageUrl }) {
	return (
		<section className={styles.hero}>
			<Container>
				<div className={styles.greetings}>
					<h1 className={styles.greetings__title}>
						Вас вітає <br className={styles.br} /> STPRO-VIN
					</h1>
					<p className={styles.greetings__description}>
						Ідеально рівні підлоги та стіни під ключ у Вінниці
					</p>
				</div>
			</Container>
			<div className={styles.table}>
				<div className={styles.table__body}>
					<div className={styles.table__card}>
						
					</div>
					<div className={styles.table__card}></div>
					<div className={styles.table__card}></div>
				</div>
			</div>
			<Image fill src={imageUrl} alt="Hero poster" sizes="100%" />
		</section>
	);
}

export default Hero;
