export const getUrls = (res) =>{
    const result= res.map(item =>{
        return item.url
    })
    return result
}

export const getId = (urls) =>{
        const splitedLink = urls.split('/');
        const photo = splitedLink[splitedLink.length-1].split('.')
        const id = photo[0]
        return id
}