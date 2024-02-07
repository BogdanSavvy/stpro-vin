import Container from '@/components/ui/container';
import Detail from '@/components/ui/detail';

function ServiseDescription({ data }) {
	return (
		<section style={{ paddingTop: '80px' }}>
			<Container>
				<Detail heading={data.heading} image={data.image}>
					<p>{data.description}</p>
				</Detail>
			</Container>
		</section>
	);
}

export default ServiseDescription;
