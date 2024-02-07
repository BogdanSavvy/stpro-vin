import styles from '@/styles/cost-calculation.module.scss';
import Calculator from '@/components/calculator';
import Heading from '@/components/ui/heading';
import Container from '@/components/ui/container';

function CostCalculation({ data }) {
	return (
		<section className={styles.costCalculation}>
			<Container>
				<div className={styles.body}>
					<article className={styles.description}>
						<Heading>Розрахунок приблизної вартості</Heading>
						<p className={styles.paragraph}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Necessitatibus minima sequi beatae aperiam nemo doloribus
							voluptas. Aspernatur sapiente id aliquam iste, eum quam laudantium
							rerum magnam quae, maiores, doloremque cupiditate! Vitae fugiat
							dicta, repudiandae, unde dolorem omnis modi autem repellat quia
							laboriosam iure et nemo laborum magni sunt impedit facilis ab
							beatae consequatur dignissimos accusamus officiis aut temporibus.
							Iure, autem?
						</p>
						<p className={styles.paragraph}>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Deleniti, nihil ad ipsam aperiam asperiores esse molestias
							praesentium excepturi. Ipsam ex, autem dolorum tenetur dignissimos
							accusantium!
						</p>
					</article>
					<Calculator data={data} />
				</div>
			</Container>
		</section>
	);
}

export default CostCalculation;
