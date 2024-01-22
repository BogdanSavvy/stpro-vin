'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

import styles from '@/styles/header.module.scss';
import MainNav from '@/components/main-nav';
import Container from '@/components/ui/container';
import Burger from '@/components/ui/burger';
import Sidebar from '@/components/ui/sidebar';
import Logo from '@/components/ui/logo';

function Header() {
	const [isOpen, setOpen] = useState(false);
	const [changeHeader, setChangeHeader] = useState(false);
	const [isMouseOn, setIsMouseOver] = useState(false);

	const handleClick = () => {
		setOpen(!isOpen);
	};

	const handleChange = () => {
		if (window.scrollY >= 100) {
			setChangeHeader(true);
		} else {
			setChangeHeader(false);
		}
	};

	const handleMouseOver = () => {
		if (!isMouseOn) setIsMouseOver(true);
	};
	const handleMouseLeave = () => {
		if (isMouseOn) setIsMouseOver(false);
	};

	useEffect(() => {
		const scrollDistance = window.scrollY || document.documentElement.scrollTop;
		if (scrollDistance >= 100) {
			setChangeHeader(true);
		}

		window.addEventListener('scroll', handleChange);
	}, []);

	return (
		<>
			<header
				className={`${styles.header} ${changeHeader ? styles.active : ''}`}
			>
				<section
					onMouseOver={handleMouseOver}
					onMouseLeave={handleMouseLeave}
					className={`${styles.header__ticker} ${styles.ticker}`}
				>
					<div
						className={`${styles.ticker__item} ${
							isMouseOn ? styles.stopAnimation : ''
						}`}
					>
						<p>м.Вінниця</p>
						<p>
							<Link href="tel:+380930002222">Номер телефону 1</Link>
						</p>
						<p>
							<Link href="tel:+380930002222">Номер телефону 2</Link>
						</p>
						<p>
							<Link href="mailto:exmple@mail.com">exmple@mail.com</Link>
						</p>
					</div>
					<div
						className={`${styles.ticker__item} ${
							isMouseOn ? styles.stopAnimation : ''
						}`}
					>
						<p>м.Вінниця</p>
						<p>
							<Link href="tel:+380930002222">Номер телефону 1</Link>
						</p>
						<p>
							<Link href="tel:+380930002222">Номер телефону 2</Link>
						</p>
						<p>
							<Link href="mailto:exmple@mail.com">exmple@mail.com</Link>
						</p>
					</div>
				</section>
				<section>
					<Container>
						<div className={styles.header__bottom}>
							<Logo />
							<MainNav position="header" />
							<Burger isOpen={isOpen} onCklick={handleClick} />
						</div>
					</Container>
				</section>
			</header>
			<Sidebar isOpen={isOpen} />
		</>
	);
}

export default Header;
