import ContactUs from '@/components/contact-us';
import Map from '@/components/map';
import MiniHero from '@/components/mini-hero';

export const metadata = {
	title: 'Контакти',
	description:
		'Замовляйте замірника вже сьогодні та вділюйте ваші задумки в реальність з лідером у сфері машинної стяжки в місті Вінниця',
	openGraph: {
		images: '/opengraph-image.png',
		alt: '/opengraph-image.alt.txt',
	},
	robots: {
		index: false,
		follow: false,
		nocache: false,
	},
};

function ContactsPage() {
	return (
		<>
			<MiniHero
				heading="Надішліть заявку вже сьогодні та ставай партнером нашої компанії"
				description="Створіть комфорт у Вашій оселі з нашою допомогою!"
				image="/images/quote_3.jpg"
				alt="Міні плакат - Зв'язатись з нами"
			/>
			<ContactUs />
			<Map />
		</>
	);
}

export default ContactsPage;
