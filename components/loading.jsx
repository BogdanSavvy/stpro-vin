import styles from '@/styles/loader-box.module.scss';

const LoaderBox = () => {
	return (
		<div className={styles.loader}>
			<span className={styles.loader_block}></span>
			<span className={styles.loader_block}></span>
			<span className={styles.loader_block}></span>
			<span className={styles.loader_block}></span>
			<span className={styles.loader_block}></span>
			<span className={styles.loader_block}></span>
			<span className={styles.loader_block}></span>
			<span className={styles.loader_block}></span>
			<span className={styles.loader_block}></span>
		</div>
	);
};

export default LoaderBox;
