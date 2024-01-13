'use client';

import Container from '@/components/ui/container';
import styles from '@/styles/about-us.module.scss';
import Heading from './ui/heading';
import Image from 'next/image';

function AboutUs() {
	return (
		<section className={styles.aboutUs}>
			<Container>
				<div className={styles.aboutUs__body}>
					<div className={styles.aboutUs__details}>
						<Heading>Про нас</Heading>
						<p className={styles.aboutUs__description}>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit.
							Exercitationem fuga provident esse! Dolores reiciendis
							perspiciatis pariatur atque, magnam laborum. Suscipit asperiores
							obcaecati iste maxime eveniet porro placeat doloribus, dolor
							doloremque. Eius vero sed sunt adipisci! Labore tempora maiores
							necessitatibus velit. Corporis repudiandae vitae, porro corrupti
							alias ipsam temporibus at delectus voluptatum, et harum doloribus?
							Magnam dolorem velit nobis fugiat necessitatibus? Exercitationem
						</p>
					</div>
					<div className={styles.aboutUs__grid}>
						<div className={styles.aboutUs__gridChild}>
							500+ <br /> <span>клієнтів</span>
						</div>
						<div className={styles.aboutUs__gridChild}>
							10+ <br /> <span>років</span>
						</div>
						<figure className={styles.aboutUs__gridChild}>
							<Image
								fill
								src="/hero_2.webp"
								alt="about-us_image"
								sizes="100%"
							/>
						</figure>
						<figure className={styles.aboutUs__gridChild}>
							<Image fill src="/hero_3.jpg" alt="about-us_image" sizes="100%" />
						</figure>
						<div className={styles.aboutUs__gridChild}>
							50000+ <br /> <span>м2</span>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
}

export default AboutUs;
