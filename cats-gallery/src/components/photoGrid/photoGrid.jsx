import React, {useEffect, useState} from 'react';
import styles from './photoGrid.module.scss';
import { Link } from 'react-router-dom';
import {useSelector} from "react-redux";
import {getBreedNameId} from "../../store/selectors";
import {fetchImages, fetchImagesByBreedId} from "../requests/request.utils";
import {getUtlId } from "./photoGrid.utils";
import {Spinner} from "../spinner/spinner";

export const PhotoGrid = ({breedId, limit}) =>{
    const breedNameId = useSelector(getBreedNameId)
    const [isLoading, setLoading] = useState(true)
    const [photos, setPhotos] = useState([]);

    const matchedBreed =breedId ?  breedNameId.find((breed) => {
        return breed.id == breedId
    }) : null
    const breedName = breedId ? matchedBreed.name : null

    useEffect(() => {
        setLoading(true);
        const request = breedId ? fetchImagesByBreedId(breedId, limit) : fetchImages(limit)
        request
            .then((response) => response.json())
            .then(res  => {
                const result= getUtlId(res)
                setPhotos(result)
                setLoading(false)
            })
            .catch((error) =>{
                breedId ?
                    console.error(`Failed to get photos by breedsId ${breedId} `, error)
                    :
                    console.error(`Failed to get photos `, error)
            })
    }, [breedId, limit]);

    return(
        <>
            {isLoading ? <Spinner /> :(<div className={styles.catImgBreedsWrapper}>
                {photos.map((current) => (
                    <div className={`${styles.catImgBreedsDiv}`} key={current.id}>
                        <Link to={current.id}>
                            <img
                                className={`${styles.catImgBreeds} `}
                                src={current.url}
                                alt="cat"
                            />
                            {breedName && <p className={styles.breedName}>{breedName}</p>}
                        </Link>

                    </div>
                ))}
            </div>)}
        </>
    )
}
