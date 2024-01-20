import styles from '@/styles/footer.module.scss';
import Container from '@/components/ui/container';
import Logo from '@/components/ui/logo';

function Footer() {
	return (
		<footer className={styles.footer}>
			<Container>
				<div className={styles.footer__container}>
					<div className={`${styles.footer__top} ${styles.top}`}>
						<div className={styles.top__body}>
							<div className={styles.top__company}>
								<Logo />
								<p className={styles.top__details}>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Praesentium est vel accusantium molestias voluptas modi
									voluptatibus? Quis accusamus necessitatibus culpa. Quia
									impedit totam adipisci expedita vitae explicabo nam repellat
									maxime?
								</p>
							</div>
							<nav className={styles.top__navigation}>
								<ul className={styles.top__list}>
									<h4 className={styles.top__listHeading}>Heading</h4>
									<li className={styles.top__link}>some Link</li>
									<li className={styles.top__link}>some Link</li>
									<li className={styles.top__link}>some Link</li>
									<li className={styles.top__link}>some Link</li>
								</ul>
								<ul className={styles.top__list}>
									<h4 className={styles.top__listHeading}>Heading</h4>
									<li className={styles.top__link}>some Link</li>
									<li className={styles.top__link}>some Link</li>
									<li className={styles.top__link}>some Link</li>
									<li className={styles.top__link}>some Link</li>
								</ul>
								<ul className={styles.top__list}>
									<h4 className={styles.top__listHeading}>Heading</h4>
									<li className={styles.top__link}>some Link</li>
									<li className={styles.top__link}>some Link</li>
									<li className={styles.top__link}>some Link</li>
									<li className={styles.top__link}>some Link</li>
								</ul>
							</nav>
						</div>
					</div>
					<span className={styles.foooter__separator}></span>
					<div className={styles.footer__bottom}>
						<div className={styles.footer__copyright}>
							2024 © ST-PROVIN. Всі права захищені.
						</div>
						<div className={styles.footer__socials}>
							<div>tel</div>
							<div>vib</div>
							<div>face</div>
						</div>
					</div>
				</div>
			</Container>
		</footer>
	);
}

export default Footer;
