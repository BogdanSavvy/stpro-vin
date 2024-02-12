'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
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
	const closeSidebar = () => {
		setOpen(false);
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
		if (scrollDistance !== 0) {
			setChangeHeader(true);
		}

		window.addEventListener('scroll', handleChange, { passive: true });
	}, []);

	useEffect(() => {
		if (isOpen) {
			document.body.classList.add('locked');
		} else {
			document.body.classList.remove('locked');
		}
	}, [isOpen]);

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
						<p>м.Вінниця, Вінницька область</p>
						<p>
							<Link href="tel:+380937330167">+38 (093) 733 0167</Link>
						</p>
						<p>
							<Link href="tel:+380937330167">
								Viber{' '}
								<Image
									src="/icons/viber.png"
									width={16}
									height={16}
									alt="Іконка - Viber"
								/>
							</Link>
						</p>
						<p>
							<Link href="mailto:Styazhkaprovin@gmail.com">
								Styazhkaprovin@gmail.com
							</Link>
						</p>
					</div>
					<div
						className={`${styles.ticker__item} ${
							isMouseOn ? styles.stopAnimation : ''
						}`}
					>
						<p>м.Вінниця, Вінницька область</p>
						<p>
							<Link href="tel:+380937330167">+38 (093) 733 0167</Link>
						</p>
						<p>
							<Link href="tel:+380937330167">
								Viber{' '}
								<Image
									src="/icons/viber.png"
									width={18}
									height={18}
									alt="Іконка - Viber"
								/>
							</Link>
						</p>
						<p>
							<Link href="mailto:Styazhkaprovin@gmail.com">
								Styazhkaprovin@gmail.com
							</Link>
						</p>
					</div>
				</section>
				<section>
					<Container>
						<div className={styles.header__main}>
							<Logo closeSidebar={closeSidebar} />
							<MainNav position="header" />
							<Burger isOpen={isOpen} onCklick={handleClick} />
						</div>
					</Container>
				</section>
			</header>
			<Sidebar isOpen={isOpen}>
				<MainNav closeSidebar={closeSidebar} position="sidebar" />
			</Sidebar>
		</>
	);
}

export default Header;
