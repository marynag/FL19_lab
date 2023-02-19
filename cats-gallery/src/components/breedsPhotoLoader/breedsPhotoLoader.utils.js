export const getUtls = (res) =>{
    const result= res.map((item) =>{
        return  item.url
    })
    return result
}