'use client';

import { useState } from 'react';

import styles from '@/styles/header.module.scss';
import MainNav from '@/components/main-nav';
import Container from '@/components/ui/container';
import Burger from '@/components/ui/burger';
import Sidebar from '@/components/ui/sidebar';
import Logo from '@/components/ui/logo';

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
							<Logo />
							<MainNav position={'header'} />
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
