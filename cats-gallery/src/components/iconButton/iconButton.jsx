import React from 'react';
import styles from './iconButton.module.scss';
import { SVG_COMPONENTS } from '../icons';

export const IconButton = ({ iconName, onClick, className }) => {
	const handleClick = () => onClick();

	const SvgComponent = SVG_COMPONENTS[iconName];

	return (
		<div
			className={[`${styles.iconButtonWrapper} ${styles[className]}`]}
			onClick={handleClick}
		>
			<SvgComponent />
		</div>
	);
};
