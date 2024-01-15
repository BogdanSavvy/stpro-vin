import Hero from '@/components/hero';
import AboutUs from '@/components/about-us';
import ServisesSlider from '@/components/servises-slider';
import FAQ from '@/components/faq';
import Features from '@/components/features';
import HowWeWorks from '@/components/how-we-works';
import ContatUs from '@/components/contact-us';

function Home() {
	return (
		<>
			<Hero imageUrl="/hero.jpg" />
			<ServisesSlider />
			<AboutUs />
			<Features />
			<HowWeWorks />
			<ContatUs />
			<FAQ />
		</>
	);
}

export default Home;
