import {API_KEY, CATS_URL, IMG_BY_ID} from "../constants/constants";

export const getImagesCommon = (limit) =>{
    const params = new URLSearchParams();
    params.append('limit', limit);
    params.append('api_key', API_KEY);

    return fetch(`${CATS_URL}?${params}`);
}

export const getImagesByBreedId = (breedId, limit) => {
    const params = new URLSearchParams();

    params.append('breed_ids', breedId);
    params.append('limit', limit);
    params.append('api_key', API_KEY);
    return fetch(`${CATS_URL}?${params}`);
}
export const getImagesByImageId = id => {
    return fetch(`${IMG_BY_ID}${id}`);
}

export const convertDataToArr = (res) =>{
    const result= res.reduce((acc, item) =>{
        acc.push(item.url)
        return acc
    },[])
    return result
}