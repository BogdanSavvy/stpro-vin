import Link from 'next/link';

import styles from '@/styles/sidebar.module.scss';

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
		href: '/servises',
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

const menu = routes.map(route => {
	return (
		<>
			<li
				key={route.href}
				className={`${styles.sidebar__menuItem} ${
					route.links ? styles.sidebar__dropDown : ''
				}`}
			>
				<Link href={route.href}>{route.name}</Link>
			</li>
			{route.links && (
				<ul className={styles.sidebar__dropDownList}>
					{route.links.map(link => (
						<li>
							<Link href={link.href}>{link.name}</Link>
						</li>
					))}
				</ul>
			)}
		</>
	);
});

function Sidebar({ isOpen }) {
	return (
		<aside className={`${styles.sidebar} ${isOpen ? styles.opened : ''}`}>
			<nav className={styles.sidebar__navigation}>
				<ul className={styles.sidebar__menu}>{menu}</ul>
			</nav>
		</aside>
	);
}

export default Sidebar;
