import styles from '@/styles/contact-us.module.scss';
import Container from '@/components/ui/container';
import Heading from '@/components/ui/heading';
import ContactUsForm from '@/components/contact-us-form';
import Image from 'next/image';
import Link from 'next/link';

function ContatUs() {
	return (
		<section className={styles.contactUs}>
			<Container>
				<div className={styles.contactUs__container}>
					<article className={styles.contactUs__details}>
						<section className={styles.contactUs__text}>
							<Heading>Замовити консультацію</Heading>
							<p>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit.
								Delectus, repellendus iste! Distinctio hic, dolores repellat
								tenetur quae iste! Ullam architecto natus autem corrupti sunt
								magni suscipit minima ea, accusamus nam!
							</p>
							<p>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit.
								Delectus, repellendus iste! Distinctio hic, dolores repellat
								tenetur quae iste! Ullam architecto natus autem corrupti sunt
								magni suscipit minima ea, accusamus nam!
							</p>
						</section>
						<section className={styles.contactUs__cards}>
							<article className={styles.card}>
								<figure className={styles.card__figure}>
									<Image
										width={70}
										height={70}
										src="/phone.png"
										alt="phone_png"
									/>
								</figure>
								<div className={styles.card__contacts}>
									<Link href="tel:+380930582222">+38 (093) 058 2222</Link>
									<Link href="tel:+380930582222">+38 (093) 058 2222</Link>
								</div>
							</article>
							<article className={styles.card}>
								<figure className={styles.card__figure}>
									<Image
										width={70}
										height={70}
										src="/email.png"
										alt="email_png"
									/>
								</figure>
								<div className={styles.card__contacts}>
									<Link href="mailto:example@mail.com">example@mail.com</Link>
								</div>
							</article>
						</section>
					</article>
					<ContactUsForm />
				</div>
			</Container>
		</section>
	);
}

export default ContatUs;
