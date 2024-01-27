import MiniHero from '@/components/mini-hero';
import React from 'react';

function Gallery() {
	return (
		<>
			<MiniHero
				heading="Ласкаво просимо до нашого портфоліо"
				description="Ми - ваш надійний партнер у сфері створення комфортних та міцних просторів."
				image="/hero.jpg"
			/>
		</>
	);
}

export default Gallery;
