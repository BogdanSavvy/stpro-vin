import Gallery from '@/components/gallery';
import MiniHero from '@/components/mini-hero';

function Portfolio() {
	return (
		<>
			<MiniHero
				heading="Ласкаво просимо до нашого портфоліо"
				description="Ми - ваш надійний партнер у сфері створення комфортних та міцних просторів."
				image="/hero.jpg"
			/>
			<Gallery />
		</>
	);
}

export default Portfolio;
