import { fetchPhotos } from '../components/requests/requests.utils';
import React, { useEffect, useState } from 'react';

export const usePhotos = (breedId, limit, order) => {
	const [photos, setPhotos] = useState([]);
	const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		/*
		 * When requesting photos in DESC order and without specifying breed,
		 * even though we request "breed-only" photos,
		 * backend sends one single photo that doesn't have breed info.
		 * That is why we request one additional photo in this particular case and filter out the broken one
		 */
		const requestLimit = !breedId && order === 'DESC' ? limit + 1 : limit;
		fetchPhotos(requestLimit, order, breedId)
			.then((res) => {
				const result = res.reduce((acc, { url, id, breeds }) => {
					const breed = breeds[0];
					if (!breed) {
						return acc;
					}
					acc.push({ url, id, breed });
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
