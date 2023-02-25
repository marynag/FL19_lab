import {API_KEY, URL_BASE, URL_PHOTOS_SEARCH,} from "./requests.constants";

export const fetchPhotos = (breedId, limit) => {
    const params = new URLSearchParams();
    const isBreedId = breedId ? params.append('breed_ids', breedId) : null
    params.append('limit', limit);
    params.append('api_key', API_KEY);
    return fetch(`${URL_PHOTOS_SEARCH}?${params}`);
}

export const fetchPhotoById = (id) => {
    return fetch(`${URL_BASE}/images/${id}`);
}