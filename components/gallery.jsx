'use client';

import { useState } from 'react';
import Image from 'next/image';

import styles from '@/styles/gallery.module.scss';

const images = [
	{
		src: '/images/styazhka_1.jpg',
		width: '800',
		height: '500',
		caption: '1',
	},
	{
		src: '/images/styazhka_2.jpg',
		width: '800',
		height: '600',
		caption: '2',
	},
	{
		src: '/images/styazhka_3.jpg',
		width: '800',
		height: '500',
		caption: '3',
	},
	{
		src: '/images/styazhka_8.jpg',
		width: '800',
		height: '500',
		caption: '4',
	},
	{
		src: '/images/plaster_2.jpg',
		width: '800',
		height: '600',
		caption: '5',
	},
	{
		src: '/images/plaster_3.jpg',
		width: '800',
		height: '800',
		caption: '6',
	},
	{
		src: '/images/rozuklon_2.jpg',
		width: '800',
		height: '500',
		caption: '7',
	},
	{
		src: '/images/rozuklon_3.jpg',
		width: '800',
		height: '600',
		caption: '8',
	},
	{
		src: '/images/styazhka_5.jpg',
		width: '800',
		height: '600',
		caption: '9',
	},
	{
		src: '/images/styazhka_9.jpg',
		width: '800',
		height: '500',
		caption: '10',
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
