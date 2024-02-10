// 'use client';

// import { useEffect, useState } from 'react';

async function Map() {
	// const [isMounted, setIsMounted] = useState(false);

	// useEffect(() => {
	// 	setIsMounted(true);
	// }, []);

	// if (!isMounted) {
	// 	return null;
	// }

	return (
		<section>
			<div style={{ width: '100%' }}>
				<iframe
					title="м.Вінниця, Вінницька область"
					width="100%"
					height="500"
					loading="lazy"
					frameBorder="0"
					scrolling="no"
					marginHeight="0"
					marginWidth="0"
					referrerPolicy="no-referrer-when-downgrade"
					src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=Vinnitsia,%20Vinnytsia%20Oblast+(STPRO%20VIN)&amp;t=p&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
				></iframe>
			</div>
		</section>
	);
}

export default Map;
