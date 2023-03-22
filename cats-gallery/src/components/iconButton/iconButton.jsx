import React from 'react';
import styles from './iconButton.module.scss';
import { SVG_COMPONENTS } from '../icons';

export const IconButton = ({ name, onClick }) => {
	const handleClick = () => onClick();

	return (
		<div className={styles.iconButtonWrapper} onClick={handleClick}>
			{React.createElement(SVG_COMPONENTS[name])}
		</div>
	);
};
