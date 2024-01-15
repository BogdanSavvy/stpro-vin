'use client';

import Container from '@/components/ui/container';
import styles from '@/styles/about-us.module.scss';
import Heading from './ui/heading';
import Image from 'next/image';

function AboutUs() {
	return (
		<section className={styles.aboutUs}>
			<Container>
				<Heading>Про нас</Heading>
				<div className={styles.aboutUs__body}>
					<div className={styles.aboutUs__details}>
						<p className={styles.aboutUs__description}>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit.
							Exercitationem fuga provident esse! Dolores reiciendis
							perspiciatis pariatur atque, magnam laborum. Suscipit asperiores
							obcaecati iste maxime eveniet porro placeat doloribus, dolor
							doloremque. Eius vero sed sunt adipisci! Labore tempora maiores
							necessitatibus velit.
						</p>
						<p className={styles.aboutUs__description}>
							Corporis repudiandae vitae, porro corrupti alias ipsam temporibus
							at delectus voluptatum, et harum doloribus? Magnam dolorem velit
							nobis fugiat necessitatibus? Exercitationem Lorem ipsum dolor sit
							amet consectetur adipisicing elit. Nostrum molestiae, voluptatibus
							pariatur ab soluta perspiciatis rem iure eveniet. Nihil magni
							obcaecati quidem sequi modi voluptatum nulla animi consequatur id
							at?
						</p>
					</div>
					<div className={styles.aboutUs__grid}>
						<div className={styles.aboutUs__gridChild}>
							10+ <br /> <span>років</span>
						</div>
						<div className={styles.aboutUs__gridChild}>
							500+ <br /> <span>клієнтів</span>
						</div>
						<figure className={styles.aboutUs__gridChild}>
							<Image
								fill
								src="/hero_2.webp"
								alt="about-us_image_1"
								sizes="100%"
							/>
						</figure>
						<figure className={styles.aboutUs__gridChild}>
							<Image
								fill
								src="/hero_3.jpg"
								alt="about-us_image_2"
								sizes="100%"
							/>
						</figure>
						<div className={styles.aboutUs__gridChild}>
							50k+ <br /> <span>м2</span>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
}

export default AboutUs;
