import styles from '@/styles/loader-box.module.scss';

const LoaderBox = () => {
	return (
		<section className={styles.loader}>
			<span className={styles.loader_block}></span>
			<span className={styles.loader_block}></span>
			<span className={styles.loader_block}></span>
			<span className={styles.loader_block}></span>
			<span className={styles.loader_block}></span>
			<span className={styles.loader_block}></span>
			<span className={styles.loader_block}></span>
			<span className={styles.loader_block}></span>
			<span className={styles.loader_block}></span>
		</section>
	);
};

export default LoaderBox;
