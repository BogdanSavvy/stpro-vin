import Hero from '@/components/hero';
import AboutUs from '@/components/about-us';
import ServisesSlider from '@/components/servises-slider';
import FAQ from '@/components/faq';

function Home() {
	return (
		<>
			<Hero imageUrl="/hero.jpg" />
			<ServisesSlider />
			<AboutUs />
			<FAQ/>
		</>
	);
}

export default Home;
