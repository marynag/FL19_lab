export const getUrls = (res) =>{
    const result= res.map(item =>{
        return item.url
    })
    return result
}

export const getUrlAndOverlay = (urls, overlay) =>{
    const res = urls.map((element, index)=>{
        const obj ={
            url:element,
            overlay: overlay[index],
        }
        return obj
    })
    return res
}

export const getId = (urls) =>{
        const splitedLink = urls.split('/');
        const photo = splitedLink[splitedLink.length-1].split('.')
        const id = photo[0]
        return id
}