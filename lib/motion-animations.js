export const sectionAnimation = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
	},
};

export const textAnimation = {
	hidden: {
		x: -100,
		opacity: 0,
	},
	visible: custom => ({
		x: 0,
		opacity: 1,
		transition: { delay: custom * 0.4 },
	}),
};

export const heroFrameAnimation = {
	hidden: {
		opacity: 0,
		height: 0,
	},
	visible: {
		opacity: 1,
		height: '100%',
	},
};

export const achivmentsAnimation = {
	hidden: {
		x: 100,
		opacity: 0,
	},
	visible: custom => ({
		x: 0,
		opacity: 1,
		transition: { delay: custom * 0.3 },
	}),
};

export const bannerAnimation = {
	hidden: {
		y: -100,
		opacity: 0,
	},
	visible: {
		y: 0,
		opacity: 1,
		transition: { delay: 0.3 },
	},
};

export const sliderAnimation = {
	hidden: {
		x: 100,
		opacity: 0,
	},
	visible: {
		x: 0,
		opacity: 1,
		transition: { delay: 0.3 },
	},
};

export const stepAnimation = {
	hidden: {
		y: -100,
		opacity: 0,
	},
	visible: custom => ({
		y: 0,
		opacity: 1,
		transition: { delay: custom * 0.2 },
	}),
};

export const cardAnimation = {
	hidden: {
		x: -100,
		y: -100,
		scale: 0,
		opacity: 0,
	},
	visible: custom => ({
		x: 0,
		y: 0,
		scale: 1,
		opacity: 1,
		transition: { delay: 0.2 * custom },
	}),
};

export const swiperSlideAnimation = (isActive, direction, custom) => {
	return {
		initial: {
			x: direction === 'left' ? -100 : direction === 'right' ? 100 : 0,
			y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
			opacity: 0,
		},
		animate: {
			x: !isActive
				? direction === 'left'
					? -100
					: direction === 'right'
					? 100
					: 0
				: 0,
			y: !isActive
				? direction === 'up'
					? -100
					: direction === 'down'
					? 100
					: 0
				: 0,
			opacity: isActive ? 1 : 0,
			transition: { delay: 0.5 * custom },
		},
		exit: {
			x: isActive
				? direction === 'left'
					? -100
					: direction === 'right'
					? 100
					: 0
				: 0,
			y: isActive
				? direction === 'up'
					? 100
					: direction === 'down'
					? -100
					: 0
				: 0,
			opacity: isActive ? 0 : 1,
		},
	};
};

export const swiperFadeAnimation = (isActive, custom) => {
	return {
		initial: {
			scale: 0.5,
			opacity: 0,
		},
		animate: {
			scale: isActive ? 1 : 0.5,
			opacity: isActive ? 1 : 0,
			transition: { delay: 0.5 * custom },
		},
		exit: {
			scale: isActive ? 0.5 : 1,
			opacity: isActive ? 0 : 1,
			transition: { delay: 0.5 * custom },
		},
	};
};

export const miniHeroAnimation = {
	hidden: {
		y: -200,
		opacity: 0,
	},
	visible: {
		y: 0,
		opacity: 1,
	},
};

export const flipAnimation = {
	hidden: {
		opacity: 0,
		skewX: 90,
	},
	visible: custom => ({
		opacity: 1,
		skewX: 180,
		transition: { delay: 0.2 * custom },
	}),
};
