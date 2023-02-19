export const getPhotoId = (url) =>{
    const arr = url.split('/')
    const idPart= arr[arr.length-1].split('.')
    const id = idPart[0]
    return id
}