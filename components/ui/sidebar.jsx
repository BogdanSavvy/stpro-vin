import styles from '@/styles/sidebar.module.scss';

function Sidebar({ isOpen, children }) {
	return (
		<aside className={`${styles.sidebar} ${isOpen ? styles.opened : ''}`}>
			{children}
		</aside>
	);
}

export default Sidebar;
