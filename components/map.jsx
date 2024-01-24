'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import { sectionAnimation } from '@/lib/motion-animations';

function Map() {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) {
		return null;
	}

	return (
		<motion.section
			initial="hidden"
			whileInView="visible"
			viewport={{ amount: 0.4, once: true }}
			variants={sectionAnimation}
		>
			<div style={{ width: '100%' }}>
				<iframe
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
		</motion.section>
	);
}

export default Map;
