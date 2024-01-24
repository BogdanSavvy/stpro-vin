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
									Ваш партнер у сфері якісного будівництва. За вашим комфортом
									та надійністю - крок за кроком з нами. Наша місія -
									перетворити ваші ідеї в реальність, надаючи високоякісні
									будівельні рішення. Обирайте STPRO-VIN - будуйте разом із
									впевненістю у майбутнє.
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
							2024 © STPRO-VIN. Всі права захищені.
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
