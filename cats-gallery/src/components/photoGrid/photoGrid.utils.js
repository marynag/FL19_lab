import {getPhotoId} from "../photoDetails/photoDetails.utils";

export const getUtlId = (res) =>{
    const result= res.reduce((acc, item) =>{
        const obj={};
        obj['url']=item.url
        obj['id']=getPhotoId(item.url)
        acc.push(obj)
        return acc
    },[])
    return result
}