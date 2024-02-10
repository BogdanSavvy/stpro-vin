'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

import styles from '@/styles/main-nav.module.scss';

function MainNav({ position, closeSidebar }) {
	const pathName = usePathname();

	const [openAcordion, setOpenAcordion] = useState(false);

	const handleClick = () => {
		setOpenAcordion(!openAcordion);
	};

	const routes = [
		{
			href: '/about',
			label: 'Про нас',
			isActive: pathName === '/about',
		},
		{
			href: '/servises',
			label: 'Послуги',
			isActive:
				(pathName === '/servises/screed') |
				'/servises/plaster' |
				'/servises/roofing',
			links: [
				{
					href: '/servises/screed',
					label: 'Стяжка підлоги',
				},
				{
					href: '/servises/plaster',
					label: 'Штукатурка стін',
				},
				{
					href: '/servises/roofing',
					label: 'Покрівля',
				},
			],
		},
		{
			href: '/portfolio',
			label: 'Портфоліо',
			isActive: pathName === '/portfolio',
		},
		{
			href: '/contacts',
			label: 'Контакти',
			isActive: pathName === '/contacts',
		},
	];

	if (position === 'header') {
		return (
			<nav className={styles.navigation}>
				<ul className={`${styles.navigation__list}`}>
					{routes.map((route, index) => (
						<li key={index}>
							{route.links ? (
								<div
									className={`${styles.navigation__ddTrigger} ${
										route.isActive ? styles.activeLink : ''
									}`}
									key={route.href}
								>
									{route.label}
									<span></span>
									<ul className={styles.navigation__ddList}>
										{route.links.map(ddItem => (
											<li
												className={styles.navigation__ddItem}
												key={ddItem.href}
											>
												<Link href={ddItem.href}>{ddItem.label}</Link>
											</li>
										))}
									</ul>
								</div>
							) : (
								<div className={styles.navigation__item} key={route.href}>
									<Link
										href={route.href}
										className={route.isActive ? styles.activeLink : ''}
									>
										{route.label}
									</Link>
								</div>
							)}
						</li>
					))}
				</ul>
			</nav>
		);
	}

	if (position === 'sidebar') {
		return (
			<nav className={styles.sidebarNav}>
				<ul className={`${styles.sidebarNav__list}`}>
					{routes.map((route, index) => (
						<li key={index}>
							{route.links ? (
								<div
									onClick={handleClick}
									className={`${styles.accordion} ${
										openAcordion ? styles.open : ''
									}`}
									key={route.href}
								>
									{route.label}
									<span></span>
									<ul
										className={`${styles.accordion__list} ${
											openAcordion ? styles.open : ''
										}`}
									>
										{route.links.map(link => (
											<li
												className={`${styles.accordion__item} ${
													openAcordion ? styles.open : ''
												}`}
												key={link.href}
											>
												<Link onClick={closeSidebar} href={link.href}>
													{link.label}
												</Link>
											</li>
										))}
									</ul>
								</div>
							) : (
								<div className={styles.sidebarNav__item} key={route.href}>
									<Link
										onClick={closeSidebar}
										href={route.href}
										className={route.isActive ? styles.activeLink : ''}
									>
										{route.label}
									</Link>
								</div>
							)}
						</li>
					))}
				</ul>
			</nav>
		);
	}
}

export default MainNav;
