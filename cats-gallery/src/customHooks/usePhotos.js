import {fetchPhotos} from "../components/requests/requests.utils";
import React, {useEffect, useState} from "react";

export const usePhotos = (breedId, limit, overlay) => {
    const [photos, setPhotos] = useState([]);
    const [isLoading, setLoading] = useState(false)

    useEffect(()=>{
        setLoading(true)
        fetchPhotos(breedId, limit)
            .then(res  => {
                const result =res.map(({url,id, breeds})=>({
                    url,
                    breed: breeds[0],
                    id,
                }));
                setPhotos(result)
                setLoading(false)
            })
            .catch((error) =>{
                console.error('Failed to get photos by params', {breedId, limit}, error);
            })
    },[breedId, limit])

    return {photos, isLoading};
}