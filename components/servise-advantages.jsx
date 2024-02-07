import React from 'react';
import Container from './ui/container';
import Detail from './ui/detail';

function ServiseAdvantages({ data }) {
	return (
		<section>
			<Container>
				<Detail heading={data.heading}>
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

export default ServiseAdvantages;
