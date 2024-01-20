import styles from '@/styles/contacts-banner.module.scss';
import Container from '@/components/ui/container';
import MainButton from '@/components/ui/main-button';

function ContactsBanner() {
	return (
		<section className={styles.banner}>
			<Container>
				<div className={styles.banner__text}>
					<p>Невідкладне діло потребує <span>швидкого рішення!</span></p>
					<p>
						Зв'яжись з нами сьогодні та отримай безкоштовну консультацію по
						будь якому питанню ...
					</p>
					<MainButton>Зв'язатись</MainButton>
				</div>
			</Container>
		</section>
	);
}

export default ContactsBanner;
