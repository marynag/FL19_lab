import ICON_FAVOURITE from '../../../svg/heart.svg';
import styles from '../photoGrid.module.scss';
import React from 'react';

export const HeartOverlay = () => {
	return (
		<img src={ICON_FAVOURITE} className={styles.breedName} alt={'heart'} />
	);
};
