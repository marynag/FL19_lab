export const getUrlAndOverlay = (response, overlays) =>{
    const result =response.map(({url,id}, index)=>({
        url,
        overlay: overlays[index],
        id,
    }));
    return result
}