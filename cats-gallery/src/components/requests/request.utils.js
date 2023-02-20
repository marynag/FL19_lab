import {API_KEY, URL_BASE, URL_IMAGES_SEARCH} from "./requests.constants";

export const fetchImages = (limit) =>{
    const params = new URLSearchParams();
    params.append('limit', limit);
    params.append('api_key', API_KEY);
    params.append('has_breeds',1)
    return fetch(`${URL_IMAGES_SEARCH}?${params}`);
}

export const fetchImagesByBreedId = (breedId, limit) => {
    const params = new URLSearchParams();
    params.append('breed_ids', breedId);
    params.append('limit', limit);
    params.append('api_key', API_KEY);
    return fetch(`${URL_IMAGES_SEARCH}?${params}`);
}

export const fetchPhotoById = (id) => {
    return fetch(`${URL_BASE}/images/${id}`);
}