import Container from '@/components/ui/container';
import Heading from '@/components/ui/heading';

function ServiseDescription({ data }) {
	return (
		<section>
			<Container>
				<Heading>{data.heading}</Heading>
				<article>
					<p>{data.description}</p>
				</article>
			</Container>
		</section>
	);
}

export default ServiseDescription;
