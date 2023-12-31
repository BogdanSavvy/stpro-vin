'use client';

import { useState } from 'react';

import styles from '@/styles/burger.module.scss';

function Burger() {
	const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(!open);
	};

	return (
		<>
		<div
			className={`${styles.nav_icon_4} ${open && styles.open}`}
			onClick={handleClick}
		>
			<span></span>
			<span></span>
			<span></span>
		</div>
		</>
	);
}

export default Burger;
