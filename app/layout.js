//import { Roboto } from 'next/font/google';
import { Montserrat } from 'next/font/google';
import './globals.css';

import Header from '@/components/header';
import Sidebar from '@/components/ui/sidebar';
import Footer from '@/components/footer';

//const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'] });
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
		<html lang="ua">
			<body className={montserrat.className}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
