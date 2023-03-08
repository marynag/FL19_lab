import {API_KEY, URL_BREEDS, URL_PHOTOS, URL_PHOTOS_SEARCH,} from "./requests.constants";
import {BREEDS_FETCHED} from "../../store/breeds/actionTypes";

export const fetchPhotos = (breedId, limit) => {
    const params = new URLSearchParams();
    if(breedId) {
        params.append('breed_ids', breedId);
    }
    params.append('has_breeds', 1);
    params.append('limit', limit);
    params.append('api_key', API_KEY);
    return fetch(`${URL_PHOTOS_SEARCH}?${params}`);
}

export const fetchPhotoById = (id) => {
    return fetch(`${URL_PHOTOS}/${id}`);
}

export const getBreeds = () =>{
    return (dispatch) =>{
        fetch(URL_BREEDS)
            .then(response => response.json())
            .then(response =>dispatch({ type: BREEDS_FETCHED, payload: response })
            )
    }
}