import {URL_BREEDS_INFO} from "../../components/constants/requests.constants";
import {BREEDS_FETCHED} from "./actionTypes";

export const getBreeds = () =>{
    return (dispatch) =>{
        fetch(URL_BREEDS_INFO)
            .then(response => response.json())
            .then(response =>dispatch({ type: BREEDS_FETCHED, payload: response })
            )
    }
}
