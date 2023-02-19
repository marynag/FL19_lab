import {BREEDS_FETCHED} from "./actionTypes";
import {getBreedNameId} from "../../components/breeds/breeds.utils";

export const breedReducer = (state = [], action) =>{
    switch(action.type){
        case BREEDS_FETCHED:
            return getBreedNameId(action.payload)
        default:
            return state
    }
}