import styles from '@/styles/contact-us.module.scss';
import Container from '@/components/ui/container';
import Heading from '@/components/ui/heading';
import ContactUsForm from '@/components/contact-us-form';

function ContatUs() {
	return (
		<section className={styles.contactUs}>
			<Container>
				<article className={styles.contactUs__container}>
					<div className={styles.contactUs__text}>
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
					</div>
					<ContactUsForm />
				</article>
			</Container>
		</section>
	);
}

export default ContatUs;
