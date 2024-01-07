import styles from '@/styles/heading.module.scss';

function Heading({ children }) {
	return <h3 className={styles.heading}>{children}</h3>;
}

export default Heading;
