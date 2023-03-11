import {BREEDS_FETCHED} from "./actionTypes";

export const breedReducer = (state = [], action) =>{
    switch(action.type){
        case BREEDS_FETCHED:
            return action.payload
        default:
            return state
    }
}