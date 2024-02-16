'use client';

import styles from '@/styles/burger.module.scss';

function Burger({ isOpen, onCklick }) {
	return (
		<>
			<button
				aria-label="Меню"
				role="button"
				className={`${styles.nav_icon_4} ${isOpen && styles.open}`}
				onClick={onCklick}
			>
				<span></span>
				<span></span>
				<span></span>
			</button>
		</>
	);
}

export default Burger;
