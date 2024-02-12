import Gallery from '@/components/gallery';
import MiniHero from '@/components/mini-hero';

export const metadata = {
	title: 'Галерея',
	description:
		'Перегляньте та переконайтесь у вишуканості наших проектів. Замовляйте Напівсуху стяжку, штукатурку та покрівлю у нас за найкращою ціною та якістю, м.Вінниця та область.',
	openGraph: {
		images: '/images/hero_gallery.png',
	},
};

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
