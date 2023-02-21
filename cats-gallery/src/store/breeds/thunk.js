import {URL_BREEDS} from "../../components/requests/requests.constants";
import {BREEDS_FETCHED} from "./actionTypes";

export const getBreeds = () =>{
    return (dispatch) =>{
        fetch(URL_BREEDS)
            .then(response => response.json())
            .then(response =>dispatch({ type: BREEDS_FETCHED, payload: response })
            )
    }
}
