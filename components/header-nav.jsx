import styles from '@/styles/header-nav.module.scss';
import Link from 'next/link';

const routes = [
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
		links: [
			{
				href: '/servises/screed',
				name: 'Стяжка підлоги',
			},
			{
				href: '/servises/plaster',
				name: 'Штукатурка стін',
			},
			{
				href: '/servises/roofing',
				name: 'Покрівля дахів',
			},
		],
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

function HeaderNav() {
	return (
		<nav className={styles.navigation}>
			<ul className={styles.list}>
				{routes.map(route => (
					<li className={styles.list__item}>
						<Link href={route.href}>{route.name}</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}

export default HeaderNav;
