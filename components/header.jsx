'use client';

import Link from 'next/link';
import { useState } from 'react';

import styles from '@/styles/header.module.scss';
import HeaderNav from '@/components/header-nav';
import Container from '@/components/ui/container';
import Burger from '@/components/ui/burger';
import Sidebar from '@/components/ui/sidebar';

function Header() {
	const [isOpen, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(!isOpen);
	};

	return (
		<>
			<header className={styles.header}>
				<section className={styles.header__upper}>
					<div>Upper headet</div>
					<div>Upper headet</div>
				</section>
				<section>
					<Container>
						<div className={styles.header__bottom}>
							<Link href="/" className={styles.header__logo}>
								<h2>ST PRO VIN</h2>
							</Link>
							<HeaderNav />
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
