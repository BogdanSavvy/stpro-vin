import Link from 'next/link';

import styles from '@/styles/logo.module.scss';

function Logo({ closeSidebar }) {
	return (
		<Link onClick={closeSidebar} href="/" className={styles.logo}>
			<h2>ST PRO VIN</h2>
		</Link>
	);
}

export default Logo;
