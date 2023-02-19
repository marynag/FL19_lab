import { createSelector } from 'reselect'

export const getBreedInfo = (state)=>state.breeds;

export const getBreedsNames = createSelector(getBreedInfo,items =>
    items.reduce((acc, breed) => {
        acc.push(breed.name)
        return acc
    },[])
)