import React from 'react';
import Container from './ui/container';
import Heading from './ui/heading';

function ServiseAdvantages({ data }) {
	return (
		<section>
			<Container>
				<Heading>{data.heading}</Heading>
				<article>
					<ul>
						{data.list.map((item, index) => (
							<li key={index}>{item.text}</li>
						))}
					</ul>
				</article>
			</Container>
		</section>
	);
}

export default ServiseAdvantages;
