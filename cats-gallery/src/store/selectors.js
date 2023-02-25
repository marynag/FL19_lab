import { createSelector } from 'reselect'

export const getBreedInfo = (state)=>state.breeds;

export const getBreedNames = createSelector(getBreedInfo, breedInfo =>
    breedInfo.reduce((acc, item) =>{
            const { id, name } = item;
            acc.push({ id, name });
            return acc;
    }, [])
)

export const matchBreedNames = createSelector(getBreedInfo, breedInfo =>
    breedInfo.reduce((acc, item) =>{
           acc[item.name]=item.id
            return acc
    }, {})
)