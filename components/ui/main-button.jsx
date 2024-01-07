import styles from '@/styles/main-button.module.scss';

function MainButton({ children, clickEvent, className }) {
	return <button className={styles.mainButton}>{children}</button>;
}

export default MainButton;
