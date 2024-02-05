import styles from '@/styles/secondary-button.module.scss';

function SecondaryButton({
	children,
	clickEvent,
	type = 'button',
	disabled = false,
}) {
	return (
		<button
			onClick={clickEvent}
			type={type}
			disabled={disabled}
			className={`${styles.secondaryButton}`}
		>
			<span>{children}</span>
		</button>
	);
}

export default SecondaryButton;
