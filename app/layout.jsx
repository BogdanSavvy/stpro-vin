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
	title: 'STPRO-vin',
	description: 'Screed in Vinnitsia',
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
