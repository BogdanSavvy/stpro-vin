import Hero from '@/components/hero';
import AboutUs from '@/components/about-us';
import ServisesSlider from '@/components/servises-slider';

function Home() {
	return (
		<main className="wrapper">
			<Hero imageUrl="/hero.jpg" />
			<ServisesSlider />
			<AboutUs/>
		</main>
	);
}

export default Home;
