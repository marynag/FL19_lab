import { createSelector } from 'reselect';

export const getBreedInfo = (state) => state.breeds;

export const breedsNamesSelector = createSelector(getBreedInfo, (breedInfo) =>
	breedInfo.reduce((acc, item) => {
		const { id, name } = item;
		acc[id] = name;
		return acc;
	}, {})
);
