'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

import styles from '@/styles/contacts-banner.module.scss';
import MainButton from '@/components/ui/main-button';
import { sectionAnimation, bannerAnimation } from '@/lib/motion-animations';

function ContactsBanner() {
	return (
		<motion.section
			initial="hidden"
			whileInView="visible"
			viewport={{ amount: 0.4, once: true }}
			variants={sectionAnimation}
			className={styles.banner}
		>
			<motion.div variants={bannerAnimation} className={styles.banner__text}>
				<p>
					Готові втілити ваші ідеї в реальність? Звертайтеся до нас вже{' '}
					<span>зараз!</span>
				</p>
				<p>
					Зв'яжись з нами сьогодні та отримай <span>безкоштовну</span>{' '}
					консультацію по будь якому питанню.
				</p>
				<MainButton>
					<Link href="/contacts">Зв'язатись</Link>
				</MainButton>
			</motion.div>
			<Image fill src="/stajka_2.jpg" alt="styazhka_banner" sizes="100vw" />
		</motion.section>
	);
}

export default ContactsBanner;
