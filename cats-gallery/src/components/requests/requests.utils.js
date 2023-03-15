import {
	API_KEY,
	URL_BREEDS,
	URL_PHOTOS,
	URL_PHOTOS_SEARCH,
} from './requests.constants';
import { IMAGE_SIZE } from '../../constants/constants';

const getResponse = (url) => {
	return fetch(url).then((response) => response.json());
};

export const fetchPhotos = (limit, order, breedId, type) => {
	const params = new URLSearchParams();
	if (breedId) {
		params.append('breed_ids', breedId);
	}
	params.append('order', order);
	params.append('limit', limit);
	params.append('size', IMAGE_SIZE);

	//mime_types==='gif' is not compatible with has_breeds
	if (type === 'gif') {
		params.append('mime_types', type);
	} else {
		params.append('has_breeds', 1);
	}
	params.append('api_key', API_KEY);
	return getResponse(`${URL_PHOTOS_SEARCH}?${params}`);
};

export const fetchPhotoById = (id) => {
	return getResponse(`${URL_PHOTOS}/${id}`);
};

export const fetchBreeds = () => {
	return getResponse(URL_BREEDS);
};
