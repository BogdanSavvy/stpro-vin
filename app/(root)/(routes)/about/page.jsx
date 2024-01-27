import Company from '@/components/company';
import ContactsBanner from '@/components/contacts-banner';
import Features from '@/components/features';
import GalleryBanner from '@/components/gallery-banner';
import MiniHero from '@/components/mini-hero';
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
		</>
	);
}

export default AboutPage;
