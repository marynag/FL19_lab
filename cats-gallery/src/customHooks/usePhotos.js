import {fetchPhotos} from "../components/requests/requests.utils";
import React, {useEffect, useState} from "react";
import {extractDetail} from "./usePhotos.utils";

export const usePhotos = (breedId, limit, overlay) => {
    const [photos, setPhotos] = useState([]);
    const [isLoading, setLoading] = useState(false)
    const overlays=Array(parseInt(limit)).fill(overlay)

    useEffect(()=>{
        setLoading(true)
        fetchPhotos(breedId, limit)
            .then((response) => response.json())
            .then(res  => {
                const result= extractDetail(res, overlays)
                setPhotos(result)
                setLoading(false)
            })
            .catch((error) =>{
                console.error('Failed to get photos by params', {breedId, limit}, error);
            })
    },[breedId, limit])

    return {photos, isLoading};
}