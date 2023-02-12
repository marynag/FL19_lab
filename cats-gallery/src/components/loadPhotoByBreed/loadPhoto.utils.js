import {CATS_URL, IMG_BY_ID} from "../constants/constants";

export const getImagesByBreedsMatch = input => {
    const params = new URLSearchParams();
    // params.append('limit', LIMIT);
    params.append('breed_ids', input);
    return fetch(`${CATS_URL}?${params}`);
}
export const getImagesByBreedsId = id => {
    return fetch(`${IMG_BY_ID}${id}`);
}