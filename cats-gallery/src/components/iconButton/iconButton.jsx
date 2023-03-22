import React from 'react';
import styles from './iconButton.module.scss';
import { SVG_COMPONENTS } from '../icons';

export const IconButton = ({ name, setData, data }) => {
	const handleClick = () => {
		setData(data);
	};
	return (
		<div className={styles.iconButtonWrapper} onClick={handleClick}>
			{React.createElement(SVG_COMPONENTS[name])}
		</div>
	);
};
