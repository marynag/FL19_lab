import { createSelector } from 'reselect'

export const getBreedInfo = (state)=>state.breeds;

export const getBreedNameId = createSelector(getBreedInfo, breedInfo =>
    breedInfo.reduce((acc, item) =>{
        const obj={}
        obj['name']=item.name
        obj['id']=item.id
        acc.push(obj)
        return acc
    }, [])
)