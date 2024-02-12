import Link from 'next/link';
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

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
									<li className={styles.top__listHeading}>Компанія</li>
									<li className={styles.top__link}>
										<Link href="/about">Про нас</Link>
									</li>
									<li className={styles.top__link}>
										<Link href="/portfolio">Портфоліо</Link>
									</li>
									<li className={styles.top__link}>
										<Link href="/contacts">Зв'язатись з нами</Link>
									</li>
								</ul>
								<ul className={styles.top__list}>
									<li className={styles.top__listHeading}>Послуги</li>
									<li className={styles.top__link}>
										<Link href="/servises/screed">Напівсуха стяжка</Link>
									</li>
									<li className={styles.top__link}>
										<Link href="/servises/plaster">Машинна штукатурка</Link>
									</li>
									<li className={styles.top__link}>
										<Link href="/servises/roofing">Покрівля</Link>
									</li>
								</ul>
							</nav>
						</div>
					</div>
					<span className={styles.foooter__separator}></span>
					<div className={styles.footer__bottom}>
						<div className={styles.footer__copyright}>
							2015 - 2024 © STPRO-VIN. Всі права захищені.
						</div>
						{/* <ul className={styles.footer__socials}>
							<li>
								<Link href="/">
									<TelegramIcon />
								</Link>
							</li>
							<li>
								<Link href="/">
									<WhatsAppIcon />
								</Link>
							</li>
							<li>
								<Link href="/">
									<FacebookIcon />
								</Link>
							</li>
						</ul> */}
					</div>
				</div>
			</Container>
		</footer>
	);
}

export default Footer;
