"use client"
import type { NextPage } from 'next';
import { useCallback } from 'react';
import Image from "next/image";
import styles from './hero1.module.css';


const Container: NextPage = () => {

	const onGroupContainerClick = useCallback(() => {
		// Add your code here
	}, []);

	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<Image className={styles.contentChild} width={52} height={32} sizes="100vw" alt="Health Tribe Logo" src="/assets/logo.svg" />
				<b className={styles.logo}>The Health Tribe</b>
			</div>
			<div className={styles.link} />
			<div className={styles.rectangleParent}>
				<div className={styles.groupChild} />
				<div className={styles.groupItem} />
				<div className={styles.linkText}>Home</div>
				<div className={styles.linkText2}>About Us</div>
				<div className={styles.link2}>
					<div className={styles.linkText3}>Services</div>
				</div>
				<div className={styles.linkTextParent}>
					<div className={styles.linkText4}>{`Explore `}</div>
					<Image className={styles.vectorIcon} width={13} height={8} sizes="100vw" alt="Explore Icon" src="/assets/svgs/star.svg" />
				</div>
			</div>
			<div className={styles.menu}>
				<div className={styles.linkText5}>Contact Us</div>
				<div className={styles.linkText5}>FAQ</div>
				<div className={styles.linkText5}>Blog</div>
			</div>
			<div className={styles.button}>
				<div className={styles.button2}>Book Now</div>
			</div>
			<div className={styles.progressBarParent}>
				<Image className={styles.progressBarIcon} width={233} height={6} sizes="100vw" alt="Progress Bar" src="/assets/images/image-placeholder.png" />
				<div className={styles.textCard}>
					<div className={styles.habit}>Habit</div>
					<div className={styles.oneHabitAt}>One habit at a time</div>
					<div className={styles.addressingTheRoot}>Addressing the root cause for optimal results</div>
				</div>
			</div>
			<div className={styles.rectangleGroup}>
				<div className={styles.groupInner} />
				<div className={styles.lineDiv} />
				<div className={styles.groupChild2} />
				<div className={styles.scienceBackedApproach}>SCIENCE BACKED APPROACH</div>
			</div>
			<div className={styles.rectangleContainer}>
				<div className={styles.rectangleDiv} />
				<div className={styles.groupChild3} />
				<div className={styles.movement}>{`Movement `}</div>
			</div>
			<div className={styles.groupDiv} onClick={onGroupContainerClick}>
				<div className={styles.groupInner} />
				<div className={styles.lineDiv} />
				<div className={styles.mentalWellness}>Mental Wellness</div>
			</div>
			<div className={styles.lineParent}>
				<div className={styles.lineDiv} />
				<div className={styles.support}>{`Support `}</div>
			</div>
			<Image className={styles.vectorIcon2} width={468} height={488} sizes="100vw" alt="Hero Image" src="/assets/images/image-placeholder.png" />
		</div>);
};

export default Container;
