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
	// metadataBase: new URL('https://stpro-vin.vercel.app'),
	title: {
		template: '%s | STPRO-VIN',
		default: 'STPRO-VIN',
	},
	description:
		'Машинна стяжка підлоги та інші будівельні послуги під ключ в місті Вінниця та у Вінницькій області.',
	keywords: [
		'Машинна стяжка підлоги',
		'Машинна штукатурка стін',
		'Покрівля',
		'Будівельні послуги',
		'Ремонт',
	],
	openGraph: {
		type: 'website',
		locale: 'uk_UA',
		images: {
			width: 900,
			height: 600,
		},
	},
	robots: {
		index: true,
		follow: true,
		nocache: false,
	},
};

export const viewport = {
	themeColor: 'dark',
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
