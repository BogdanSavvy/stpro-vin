'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from '@/styles/main-nav.module.scss';

function MainNav({ position }) {
	const pathName = usePathname();

	const routes = [
		{
			href: '/about',
			name: 'Про нас',
			isActive: pathName === '/about',
		},
		{
			href: '/servises',
			name: 'Послуги',
			isActive:
				(pathName === '/servises/screed') |
				'/servises/plaster' |
				'/servises/roofing',
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
			isActive: pathName === '/galery',
		},
		{
			href: '/contacts',
			name: 'Контакти',
			isActive: pathName === '/contacts',
		},
	];

	return (
			<nav className={styles.headerNavigation}>
				<ul className={styles.headerNavigation__list}>
					{routes.map(route => (
						<>
							{route.links ? (
								<li
									className={`${styles.headerNavigation__ddTrigger} ${
										route.isActive ? styles.activeLink : ''
									}`}
									key={route.href}
								>
									{route.name}
									<span></span>
									<ul className={styles.headerNavigation__ddList}>
										{route.links.map(ddItem => (
											<li
												className={styles.headerNavigation__ddItem}
												key={ddItem.href}
											>
												<Link href={ddItem.href}>{ddItem.name}</Link>
											</li>
										))}
									</ul>
								</li>
							) : (
								<li className={styles.headerNavigation__item} key={route.href}>
									<Link
										href={route.href}
										className={route.isActive ? styles.activeLink : ''}
									>
										{route.name}
									</Link>
								</li>
							)}
						</>
					))}
				</ul>
			</nav>
		);
	
	if (position === 'sidebar') {
		return (
			<></>
		);
	}
}

export default MainNav;
