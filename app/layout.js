//import { Roboto } from 'next/font/google';
import { Montserrat } from 'next/font/google';
import './globals.css';

import Header from '@/components/header';

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
			</body>
		</html>
	);
}
