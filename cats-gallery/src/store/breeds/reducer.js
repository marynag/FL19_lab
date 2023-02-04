export const breedReducer = (state = [], action) =>{
    switch(action.type){
        case 'GET_BREEDS':
            return action.payload
        default:
            return state
    }
}