import Gallery from '@/components/gallery';
import MiniHero from '@/components/mini-hero';

function Portfolio() {
	return (
		<>
			<MiniHero
				heading="Ласкаво просимо до нашого портфоліо"
				description="Тут Ви можете побачити наші виконанні роботи та впевнетись у нашому професіоналізмі. Ми - ваш надійний партнер у сфері створення комфортних та міцних просторів."
				image="/images/hero_1.jpg"
				alt="Міні плакат - STPRO-VIN портфоліо"
			/>
			<Gallery />
		</>
	);
}

export default Portfolio;
