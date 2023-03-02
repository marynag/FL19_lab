import {fetchPhotos} from "../components/requests/requests.utils";
import {useEffect, useState} from "react";
import {getUrlAndOverlay, getUrls} from "./usePhotos.utils";

export const usePhotos = (breedId, limit,overlay) => {
    const [photos, setPhotos] = useState([]);
    const [isLoading, setLoading] = useState(false)

    useEffect(()=>{
        setLoading(true)
        fetchPhotos(breedId, limit)
            .then((response) => response.json())
            .then(res  => {
                const url = getUrls(res)
                const result= getUrlAndOverlay(url, overlay)
                setPhotos(result)
                setLoading(false)
            })
            .catch((error) =>{
                breedId ?
                    console.error(`Failed to get photos by breedsId ${breedId} and by limit ${limit}`, error)
                    :
                    console.error(`Failed to get photos by limit ${limit}`, error)
            })
    },[breedId, limit])

    return {photos, isLoading};
}