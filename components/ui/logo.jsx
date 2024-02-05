import Link from 'next/link';

import styles from '@/styles/logo.module.scss';

function Logo({ closeSidebar }) {
	return (
		<Link onClick={closeSidebar} href="/" className={styles.logo}>
			<p>ST PRO VIN</p>
		</Link>
	);
}

export default Logo;
