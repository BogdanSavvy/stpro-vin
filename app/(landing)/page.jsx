import SSRHero from '@/components/server/ssr-hero';
import AboutUs from '@/components/about-us';
import ServisesSlider from '@/components/servises-slider';
import FAQ from '@/components/faq';
import Features from '@/components/features';
import HowWeWorks from '@/components/how-we-works';
import ContatUs from '@/components/contact-us';
import Map from '@/components/map';
import ContactsBanner from '@/components/contacts-banner';
import GalleryBanner from '@/components/gallery-banner';

function Home() {
	return (
		<>
			<SSRHero imageUrl="/hero.jpg" />
			<ServisesSlider />
			<AboutUs />
			<ContactsBanner />
			<Features />
			<HowWeWorks />
			<GalleryBanner />
			<ContatUs />
			<FAQ />
			<Map />
		</>
	);
}

export default Home;
