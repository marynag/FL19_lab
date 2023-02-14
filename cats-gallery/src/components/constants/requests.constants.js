const URL_BASE = 'https://api.thecatapi.com/v1'
export const URL_IMAGES_SEARCH=`${URL_BASE}/images/search`
export const URL_BREEDS_INFO=`${URL_BASE}/breeds`
export const URL_IMAGES_BY_ID=`${URL_BASE}/images`
export const API_KEY = process.env.REACT_APP_API_KEY

export const fetchImages = (limit) =>{
    const params = new URLSearchParams();
    params.append('limit', limit);
    params.append('api_key', API_KEY);

    return fetch(`${URL_IMAGES_SEARCH}?${params}`);
}

export const fetchImagesByBreedId = (breedId, limit) => {
    const params = new URLSearchParams();

    params.append('breed_ids', breedId);
    params.append('limit', limit);
    params.append('api_key', API_KEY);
    return fetch(`${URL_IMAGES_SEARCH}?${params}`);
}
export const fetchImagesByImageId = id => {
    return fetch(`${URL_IMAGES_BY_ID}/${id}`);
}