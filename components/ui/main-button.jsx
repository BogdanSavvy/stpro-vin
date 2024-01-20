import styles from '@/styles/main-button.module.scss';

function MainButton({ children, clickEvent, disabled, type }) {
	return (
		<button
			className={styles.mainButton}
			onClick={clickEvent}
			disabled={disabled}
			type={type}
		>
			<span>{children}</span>
		</button>
	);
}

export default MainButton;
