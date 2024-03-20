import Company from '@/components/company';
import ContactsBanner from '@/components/contacts-banner';
import GalleryBanner from '@/components/gallery-banner';
import MiniHero from '@/components/mini-hero';
import Quote from '@/components/quote';
import WhyWe from '@/components/why-we';

export const metadata = {
	title: 'Про нас',
	description: `Займаємося будівельною справою понад 9 років у м.Вінниця та області, спектр послуг: Машинна стяжка підлоги, Машинна штукатурка, Покрівля дахів та інших поверхонь. 
		STPRO-VIN - Компанія, яку обирають!`,
	openGraph: {
		images: '/opengraph-image.png',
	},
};

function AboutPage() {
	return (
		<>
			<MiniHero
				heading="Дякуємо, що завітали саме до нас. Ми вінницька компанія - STPRO-VIN"
				description="Ми - ваш надійний партнер у сфері створення комфортних та міцних просторів. Працюємо у м.Вінниця та Вінницькій області."
				image="/images/hero.jpg"
				alt="Міні плакат - Про нас (стяжка підлог в місті Вінниця)"
			/>
			<Company />
			<GalleryBanner />
			<WhyWe />
			<ContactsBanner />
			<Quote
				style={{ paddingTop: '80px' }}
				autor="Генрі Форд"
				image="/images/quote_2.jpg"
				alt="Цитата - Генрі Форд"
			>
				Якість – це <span>відсутність необхідності</span> робити щось знову
			</Quote>
		</>
	);
}

export default AboutPage;
