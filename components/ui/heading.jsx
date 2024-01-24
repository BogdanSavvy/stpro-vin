'use client';

import { forwardRef } from 'react';
import { motion } from 'framer-motion';

import styles from '@/styles/heading.module.scss';

const Heading = forwardRef(({ children }, ref) => {
	return (
		<h3 ref={ref} className={styles.heading}>
			{children}
		</h3>
	);
});

export const MHeading = motion(Heading);

export default Heading;
