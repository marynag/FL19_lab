import {BREEDS_FETCHED} from "./actionTypes";
import {fetchBreeds} from "../../components/requests/requests.utils";

export const getBreeds = () =>{
    return (dispatch) =>{
        fetchBreeds()
            .then(response =>dispatch({ type: BREEDS_FETCHED, payload: response })
            )
    }
}