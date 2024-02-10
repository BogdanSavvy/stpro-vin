import ContactUs from '@/components/contact-us';
import Map from '@/components/map';
import MiniHero from '@/components/mini-hero';

function ContactsPage() {
	return (
		<>
			<MiniHero
				heading="Надішліть заявку вже сьогодні та ставай партнером нашої компанії"
				description="Створіть комфорт у Вашій оселі з нашою допомогою!"
				image="/hero.jpg"
				alt="Міні плакат - Стяжка підлоги"
			/>
			<ContactUs />
			<Map />
		</>
	);
}

export default ContactsPage;
