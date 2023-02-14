export const getBreedNameId = (breedInfo) =>{
    const breedNameId = breedInfo.reduce((acc, item) =>{
        const obj={}
        obj['name']=item.name
        obj['id']=item.id
        acc.push(obj)
        return acc
    }, [])
    return breedNameId
}
