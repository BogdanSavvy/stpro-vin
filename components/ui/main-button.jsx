'use client';

import { forwardRef } from 'react';
import { motion } from 'framer-motion';

import styles from '@/styles/main-button.module.scss';

const MainButton = forwardRef(
	({ children, clickEvent, disabled, type }, ref) => {
		return (
			<div ref={ref}>
				<button
					className={styles.mainButton}
					onClick={clickEvent}
					disabled={disabled}
					type={type}
				>
					<span>{children}</span>
				</button>
			</div>
		);
	},
);
MainButton.displayName = 'MainButton';

export const MMainButton = motion(MainButton);

MMainButton.displayName = 'MMainButton';

export default MainButton;
