'use client';

import { useState } from 'react';
import Image from 'next/image';

import styles from '@/styles/gallery.module.scss';

const images = [
	{
		src: '/hero.jpg',
		width: '800',
		height: '800',
		caption: '1',
	},
	{
		src: '/hero_2.webp',
		width: '800',
		height: '800',
		caption: '2',
	},
	{
		src: '/hero_4.jpg',
		width: '800',
		height: '800',
		caption: '3',
	},
	{
		src: '/stajka_2.jpg',
		width: '800',
		height: '300',
		caption: '4',
	},
	{
		src: '/stajka.jpg',
		width: '800',
		height: '800',
		caption: '5',
	},
	{
		src: '/hero_4.png',
		width: '800',
		height: '800',
		caption: '6',
	},
	{
		src: '/hero.jpg',
		width: '800',
		height: '800',
		caption: '7',
	},
	{
		src: '/hero_2.webp',
		width: '800',
		height: '800',
		caption: '8',
	},
	{
		src: '/stajka_2.jpg',
		width: '800',
		height: '800',
		caption: '9',
	},
];

function Gallery() {
	const [detailImage, setDetailImage] = useState(null);

	const openDetail = image => {
		setDetailImage(image);
	};

	const closeDetail = () => {
		setDetailImage(null);
	};

	return (
		<section
			className={styles.gallery}
			data-state={detailImage ? 'detail' : 'gallery'}
		>
			<h2 className={styles.heading}>Наші проекти</h2>
			<div className={styles.gallery__wrapper}>
				{images.map((image, index) => (
					<figure
						key={index}
						className={styles.gallery__image}
						onClick={() => openDetail(image)}
					>
						<Image
							src={image.src}
							width={image.width}
							height={image.height}
							alt={`gallery_image_${image.caption}`}
						/>
						<figcaption>{image.caption}</figcaption>
					</figure>
				))}
			</div>
			<div
				className={`${styles.gallery__detail} ${styles.detail}`}
				onClick={closeDetail}
			>
				{detailImage && (
					<figure className={styles.detail__image}>
						<Image
							fill
							src={detailImage.src}
							alt={`gallery_image_${detailImage.caption}`}
							sizes="100vw"
						/>
						<figcaption>{detailImage.caption}</figcaption>
					</figure>
				)}
			</div>
		</section>
	);
}

export default Gallery;
