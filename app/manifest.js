export default function manifest() {
	return {
		name: 'Будівельні послуги в м.Вінниця | STPRO-VIN',
		short_name: 'STPRO-VIN',
		description:
			'Машинна стяжка підлоги та інші будівельні послуги під ключ в місті Вінниця та у Вінницькій області від лідера - STPRO-VIN',
		// start_url: 'https://stpro-pj9yfs36p-bogdansavvy.vercel.app',
		start_url: '/',
		display: 'standalone',
		background_color: '#2F343A',
		theme_color: '#2F343A',
		prefer_related_applications: true,
		icons: [
			{
				src: '/favicon-16x16.png',
				sizes: '16x16',
				type: 'image/png',
			},
			{
				src: '/favicon-32x32.png',
				sizes: '32x32',
				type: 'image/png',
			},
			{
				src: '/android-chrome-192x192.png',
				sizes: '192x192',
				type: 'image/png',
				purpose: 'any maskable',
			},
			{
				src: '/android-chrome-512x512.png',
				sizes: '512x512',
				type: 'image/png',
			},
		],
	};
}
