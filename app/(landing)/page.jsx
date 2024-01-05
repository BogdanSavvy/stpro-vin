import Hero from '@/components/hero';
import ServisesSlider from '@/components/servises-slider';

function Home() {
	return (
		<main className="wrapper">
			<Hero imageUrl="/hero.jpg" />
			<ServisesSlider />
		</main>
	);
}

export default Home;
