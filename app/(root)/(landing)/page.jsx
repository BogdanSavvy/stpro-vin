import Hero from '@/components/hero';
import AboutUs from '@/components/about-us';
import ServisesSlider from '@/components/servises-slider';
import FAQ from '@/components/faq';
import Features from '@/components/features';
import HowWeWorks from '@/components/how-we-works';
import ContatUs from '@/components/contact-us';
import Map from '@/components/map';
import ContactsBanner from '@/components/contacts-banner';
import GalleryBanner from '@/components/gallery-banner';
import Quote from '@/components/quote';

function Home() {
	return (
		<>
			<Hero imageUrl="/hero.jpg" />
			<ServisesSlider />
			<AboutUs />
			<ContactsBanner />
			<Features />
			<HowWeWorks />
			<GalleryBanner />
			<ContatUs />
			<FAQ />
			<Quote autor="Філіп Кросбі" image="/hero_4.jpg">
				Якщо ви вважаєте, що <span>якість дорога,</span> то спробуйте{' '}
				<span>невдалість</span>
			</Quote>
			<Map />
		</>
	);
}

export default Home;
