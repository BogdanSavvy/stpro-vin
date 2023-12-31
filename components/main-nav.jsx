import styles from '@/styles/main-nav.module.scss';
import Link from 'next/link';

const links = [
	{
		href: '/',
		name: 'Головна',
	},
	{
		href: '/about',
		name: 'Про нас',
	},
	{
		href: '/services',
		name: 'Послуги',
	},
	{
		href: '/galery',
		name: 'Портфоліо',
	},
	{
		href: '/contacts',
		name: 'Контакти',
	},
];

function MainNav() {
	return (
		<nav className={styles.navigation}>
			<ul className={styles.list}>
				{links.map(link => (
					<li className={styles.list__item}>
						<Link href={link.href}>{link.name}</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}

export default MainNav;
