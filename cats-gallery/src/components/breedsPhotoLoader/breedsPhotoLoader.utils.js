export const getUtls = (res) =>{
    const result= res.reduce((acc, item) =>{
        acc.push(item.url)
        return acc
    },[])
    return result
}