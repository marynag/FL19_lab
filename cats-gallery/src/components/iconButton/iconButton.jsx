import React from 'react';
import styles from './iconButton.module.scss';
import { SVG_COMPONENTS } from '../icons';

export const IconButton = ({ name, onClick, className }) => {
	const handleClick = () => onClick();

	return (
		<div
			className={[`${styles.iconButtonWrapper} ${styles[className]}`]}
			onClick={handleClick}
		>
			{React.createElement(SVG_COMPONENTS[name])}
		</div>
	);
};
