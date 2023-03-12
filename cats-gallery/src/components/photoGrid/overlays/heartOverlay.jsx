import imgLike from '../../../img/Vector 348 (Stroke).png';
import styles from '../photoGrid.module.scss';
import React from 'react';

export const HeartOverlay = () => {
	return <img src={imgLike} className={styles.breedName} alt={'heart'} />;
};
