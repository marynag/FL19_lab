import {BREEDS_FETCHED} from "./actionTypes";

export const breedReducer = (state = [], action) =>{
    switch(action.type){
        case BREEDS_FETCHED:
            const selectingBreeds = action.payload;
            selectingBreeds.unshift({id:'', name:'All breeds'})
            return selectingBreeds
        default:
            return state
    }
}