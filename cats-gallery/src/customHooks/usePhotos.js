import { fetchPhotos } from '../components/requests/requests.utils';
import React, { useEffect, useState } from 'react';

export const usePhotos = (breedId, limit, order) => {
	const [photos, setPhotos] = useState([]);
	const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		//There are some backend problems, so the 'broken' photo has been replaced by a right one
		if (order === 'DESC' && !breedId) {
			limit = limit + 1;
		}
		fetchPhotos(limit, order, breedId)
			.then((res) => {
				const result = res.reduce((acc, { url, id, breeds }) => {
					if (!breeds[0]) {
						return acc;
					}
					const obj = {
						url,
						breed: breeds[0],
						id,
					};
					acc.push(obj);
					return acc;
				}, []);
				setPhotos(result);
				setLoading(false);
			})
			.catch((error) => {
				console.error(
					'Failed to get photos by params',
					{ breedId, limit, order },
					error
				);
			});
	}, [breedId, limit, order]);

	return { photos, isLoading };
};
