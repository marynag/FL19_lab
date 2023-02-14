export const getBreedNameId = (breedInfo) =>{
    const breedNameId = breedInfo.reduce((acc, item) =>{
        acc[item.name]=item.id
        return acc
    }, {})
    return breedNameId
}
