import { Montserrat } from 'next/font/google';
import './globals.css';

import Header from '@/components/header';
import Footer from '@/components/footer';
import ScrollTopButton from '@/components/ui/scroll-top-button';

const montserrat = Montserrat({
	subsets: ['latin'],
	weight: ['400', '500', '700'],
});

export const metadata = {
	title: {
		template: '%s | STPRO-VIN',
		default: 'STPRO-VIN',
	},
	description:
		'Машинна стяжка підлоги та інші будівельні послуги під ключ в місті Вінниця та у Вінницькій області.',
};

export default function RootLayout({ children }) {
	return (
		<html lang="uk-UA">
			<body className={montserrat.className}>
				<div className="wrapper">
					<Header />
					<main className="content">{children}</main>
					<Footer />
				</div>
				<ScrollTopButton />
			</body>
		</html>
	);
}
