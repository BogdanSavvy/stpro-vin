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
		height: '600',
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
	{
		src: '/images/styazhka_10.jpg',
		width: '800',
		height: '600',
		caption: '11',
	},
	{
		src: '/images/styazhka_11.jpg',
		width: '800',
		height: '600',
		caption: '12',
	},
	{
		src: '/images/styazhka_12.jpg',
		width: '800',
		height: '500',
		caption: '13',
	},
	{
		src: '/images/styazhka_13.jpg',
		width: '800',
		height: '500',
		caption: '14',
	},
	{
		src: '/images/styazhka_14.jpg',
		width: '800',
		height: '700',
		caption: '15',
	},
	{
		src: '/images/styazhka_15.jpg',
		width: '800',
		height: '600',
		caption: '16',
	},
	{
		src: '/images/styazhka_16.jpg',
		width: '800',
		height: '650',
		caption: '17',
	},
	{
		src: '/images/styazhka_17.jpg',
		width: '800',
		height: '600',
		caption: '18',
	},
	{
		src: '/images/styazhka_18.jpg',
		width: '800',
		height: '400',
		caption: '19',
	},
	{
		src: '/images/styazhka_19.jpg',
		width: '800',
		height: '500',
		caption: '20',
	},
	{
		src: '/images/styazhka_20.jpg',
		width: '800',
		height: '600',
		caption: '21',
	},
	{
		src: '/images/styazhka_21.jpg',
		width: '800',
		height: '800',
		caption: '22',
	},
	{
		src: '/images/styazhka_22.jpg',
		width: '800',
		height: '500',
		caption: '23',
	},
	{
		src: '/images/styazhka_work_4.jpg',
		width: '800',
		height: '500',
		caption: '24',
	},
	{
		src: '/images/styazhka_23.jpg',
		width: '800',
		height: '600',
		caption: '25',
	},
	{
		src: '/images/styazhka_23.jpg',
		width: '800',
		height: '400',
		caption: '25',
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
