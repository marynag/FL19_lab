export const extractDetail = (response, overlays) =>{
    const result =response.map(({url,id, breeds}, index)=>({
        url,
        overlay: overlays ? overlays[index] : breeds[0].name,
        id,
    }));
    return result
}