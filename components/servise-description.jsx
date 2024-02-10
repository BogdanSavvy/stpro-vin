import Container from '@/components/ui/container';
import Detail from '@/components/ui/detail';

function ServiseDescription({ data }) {
	return (
		<section style={{ paddingTop: '80px' }}>
			<Container>
				<Detail heading={data.heading} image={data.image} alt={data.alt}>
					{data.description.map((el, index) => (
						<p key={index}>{el.paragraph}</p>
					))}
				</Detail>
			</Container>
		</section>
	);
}

export default ServiseDescription;
