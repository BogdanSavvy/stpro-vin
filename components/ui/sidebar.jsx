import Link from 'next/link';

import styles from '@/styles/sidebar.module.scss';

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

function Sidebar() {
	return (
		<aside className={styles.sidebar}>
			<div> Sidebar </div>
			<ul className={styles.sidebar__menu}>
				<li>1</li>
				<li>2</li>
				<li>3</li>
				<li>4</li>
				<li>5</li>
			</ul>
		</aside>
	);
}

export default Sidebar;
