import Company from '@/components/company';
import ContactsBanner from '@/components/contacts-banner';
import GalleryBanner from '@/components/gallery-banner';
import MiniHero from '@/components/mini-hero';
import Quote from '@/components/quote';
import WhyWe from '@/components/why-we';

function AboutPage() {
	return (
		<>
			<MiniHero
				heading="Дякуємо, що завітали саме до нас. Будемо знайомі ми компанія STPRO-VIN"
				description="Ми - ваш надійний партнер у сфері створення комфортних та міцних просторів."
				image="/hero.jpg"
			/>
			<Company />
			<GalleryBanner />
			<WhyWe />
			<ContactsBanner />
			<Quote style={{paddingTop: '80px'}} autor="Генрі Форд" image="/hero_4.jpg">
				Якість – це <span>відсутність необхідності</span> робити щось знову
			</Quote>
		</>
	);
}

export default AboutPage;
