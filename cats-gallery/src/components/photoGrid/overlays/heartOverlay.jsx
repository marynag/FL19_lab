import React from 'react';
import { IconButton } from '../../iconButton/iconButton';
import { FAVOURITE } from '../../iconButton/iconButton.constants';

export const HeartOverlay = () => {
	return <IconButton iconName={FAVOURITE} className='breedName' />;
};
