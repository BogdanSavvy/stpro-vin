import Link from 'next/link';

import styles from '@/styles/header.module.scss';
import MainNav from '@/components/main-nav';
import Container from '@/components/ui/container';
import Burger from '@/components/ui/burger';

function Header() {
	return (
		<header className={styles.header}>
			<article className={styles.header__upper}>Upper header</article>
			<Container>
				<div className={styles.header__bottom}>
					<Link href="/" className={styles.header__logo}>
						ST PRO VIN
					</Link>
					<MainNav />
					<Burger />
				</div>
			</Container>
		</header>
	);
}

export default Header;
