import Container from '@/components/ui/container';
import Detail from '@/components/ui/detail';

function ServiseWhenStart({ data }) {
	return (
		<section>
			<Container>
				<Detail
					heading={data.heading}
					image={data.image}
					alt={data.alt}
					reversed={true}
				>
					<ul>
						{data.list.map((item, index) => (
							<li key={index}>{item.text}</li>
						))}
					</ul>
				</Detail>
			</Container>
		</section>
	);
}

export default ServiseWhenStart;
