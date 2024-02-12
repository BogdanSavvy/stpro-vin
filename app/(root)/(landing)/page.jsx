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

export const metadata = {
	title: 'Головна',
	alternates: {
		canonical: '/',
	},
	openGraph: {
		images: {
			url: '/_next/image?url=%2Fimages%2Fstyazhka_5.jpg&w=1080&q=75',
			width: 800,
			height: 600,
			alt: 'Стяжка підлоги | STPRO-VIN',
		},
	},
};

function Home() {
	return (
		<>
			<Hero imageUrl="/images/styazhka_5.jpg" />
			<ServisesSlider />
			<AboutUs />
			<ContactsBanner />
			<Features />
			<HowWeWorks />
			<GalleryBanner />
			<ContatUs />
			<FAQ />
			<Quote
				autor="Філіп Кросбі"
				image="/images/quote_4.jpg"
				alt="Цитата - Філіп Кросбі"
			>
				Якщо ви вважаєте, що <span>якість дорога,</span> то спробуйте{' '}
				<span>невдалість</span>
			</Quote>
			<Map />
		</>
	);
}

export default Home;
