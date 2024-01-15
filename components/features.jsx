import styles from '@/styles/features.module.scss';
import Container from './ui/container';
import Heading from './ui/heading';
import Image from 'next/image';

function Features() {
	return (
		<section className={styles.features}>
			<Container>
				<Heading>Ми гарантуємо</Heading>
				<div className={styles.features__grid}>
					<div className={styles.features__card}>
						<figure className={styles.features__icon}>
							<Image
								src="/reliability.png"
								width={80}
								height={80}
								alt="features_reliability"
								className={styles.invert}
							/>
							<figcaption className={styles.features__caption}>
								Надійність
							</figcaption>
						</figure>
						<p className={styles.features__description}>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est,
							distinctio. At, ducimus!
						</p>
						<span></span>
					</div>
					<div className={styles.features__card}>
						<figure className={styles.features__icon}>
							<Image
								src="/quality.png"
								width={80}
								height={80}
								alt="features_quality"
								className={styles.invert}
							/>
							<figcaption className={styles.features__caption}>
								Якість
							</figcaption>
						</figure>
						<p className={styles.features__description}>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est,
							distinctio. At, ducimus!
						</p>
						<span></span>
					</div>
					<div className={styles.features__card}>
						<figure className={styles.features__icon}>
							<Image
								src="/speed.png"
								width={80}
								height={80}
								alt="features_speed"
								className={styles.invert}
							/>
							<figcaption className={styles.features__caption}>
								Швидкість
							</figcaption>
						</figure>
						<p className={styles.features__description}>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est,
							distinctio. At, ducimus!
						</p>
						<span></span>
					</div>
					<div className={styles.features__card}>
						<figure className={styles.features__icon}>
							<Image
								src="/price.png"
								width={80}
								height={80}
								alt="features_price"
								className={styles.invert}
							/>
							<figcaption className={styles.features__caption}>
								Найкраща ціна
							</figcaption>
						</figure>
						<p className={styles.features__description}>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est,
							distinctio. At, ducimus!
						</p>
						<span></span>
					</div>
					<div className={styles.features__card}>
						<figure className={styles.features__icon}>
							<Image
								src="/guarantee.png"
								width={80}
								height={80}
								alt="features_guarantee"
								className={styles.invert}
							/>
							<figcaption className={styles.features__caption}>
								Гарантія
							</figcaption>
						</figure>
						<p className={styles.features__description}>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est,
							distinctio. At, ducimus!
						</p>
						<span></span>
					</div>
					<div className={styles.features__card}>
						<figure className={styles.features__icon}>
							<Image
								src="/result.png"
								width={80}
								height={80}
								alt="features_result"
								className={styles.invert}
							/>
							<figcaption className={styles.features__caption}>
								Задоволення результатом
							</figcaption>
						</figure>
						<p className={styles.features__description}>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est,
							distinctio. At, ducimus!
						</p>
						<span></span>
					</div>
				</div>
			</Container>
		</section>
	);
}

export default Features;
