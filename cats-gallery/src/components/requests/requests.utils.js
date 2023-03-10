import {API_KEY, URL_BREEDS, URL_PHOTOS, URL_PHOTOS_SEARCH,} from "./requests.constants";
import {IMAGE_SIZE} from "../constants/constants";

const getResponse = (url) =>{
    return fetch(url)
        .then(response => response.json())
}

export const fetchPhotos = (breedId, limit) => {
    const params = new URLSearchParams();
    if(breedId) {
        params.append('breed_ids', breedId);
    }
    params.append('has_breeds', 1);
    params.append('limit', limit);
    params.append('size', IMAGE_SIZE);
    params.append('api_key', API_KEY);
    return getResponse(`${URL_PHOTOS_SEARCH}?${params}`);
}

export const fetchPhotoById = (id) => {
    return getResponse(`${URL_PHOTOS}/${id}`)
}

export const fetchBreeds = () => {
    return getResponse(URL_BREEDS)

}