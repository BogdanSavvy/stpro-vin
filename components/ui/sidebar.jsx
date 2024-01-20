'use client';

import Link from 'next/link';

import styles from '@/styles/sidebar.module.scss';
import MainNav from '../main-nav';

function Sidebar({ isOpen }) {
	return (
		<aside className={`${styles.sidebar} ${isOpen ? styles.opened : ''}`}>
			<MainNav position={'sidebar'} />
		</aside>
	);
}

export default Sidebar;
