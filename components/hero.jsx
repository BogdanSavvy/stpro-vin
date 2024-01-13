import Image from 'next/image';

import styles from '@/styles/hero.module.scss';

function Hero({ imageUrl }) {
	return (
		<section className={styles.hero}>
			<div className={styles.greetings}>
				<h1 className={styles.greetings__title}>
					Вас вітає <br className={styles.br} /> STPRO-VIN
				</h1>
				<p className={styles.greetings__description}>
					Ідеально рівні підлоги та стіни під ключ у Вінниці
				</p>
			</div>

			<figure className={styles.hero__poster}>
				<Image fill src={imageUrl} alt="Hero poster" sizes="100%" />
			</figure>
		</section>
	);
}

export default Hero;
