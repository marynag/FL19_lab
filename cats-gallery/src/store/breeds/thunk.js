import {IMG_INFO} from "../../components/constants/constants";

export const getBreeds = () =>{
    return (dispatch) =>{
        fetch(IMG_INFO)
            .then(response => response.json())
            .then(response =>dispatch({ type: 'GET_BREEDS', payload: response })
            )
    }
}
