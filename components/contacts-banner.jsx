import Image from 'next/image';

import styles from '@/styles/contacts-banner.module.scss';
import Container from '@/components/ui/container';
import MainButton from '@/components/ui/main-button';
import Link from 'next/link';

function ContactsBanner() {
	return (
		<section className={styles.banner}>
			{/* <Container> */}
			<div className={styles.banner__text}>
				<p>
					Не відкладай на завтре те, що можна зробити <span>прямо зараз!</span>
				</p>
				<p>
					Зв'яжись з нами сьогодні та отримай <span>безкоштовну</span>{' '}
					консультацію по будь якому питанню ...
				</p>
				<MainButton>
					<Link href="/contacts">Зв'язатись</Link>
				</MainButton>
			</div>
			{/* </Container> */}
			<Image fill src="/stajka_2.jpg" alt="styazhka_banner" sizes="100%" />
		</section>
	);
}

export default ContactsBanner;
