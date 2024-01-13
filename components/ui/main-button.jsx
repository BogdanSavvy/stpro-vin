import styles from '@/styles/main-button.module.scss';

function MainButton({ children, clickEvent }) {
	return (
		<button className={styles.mainButton} onClick={clickEvent}>
			<span>{children}</span>
		</button>
	);
}

export default MainButton;
