import React, { useEffect, useState } from 'react';
import styles from './breedsPhotoLoader.module.scss'
import { Link } from 'react-router-dom';
import {getUtls} from "./breedsPhotoLoader.utils";
import {PATHS} from "../constants/path.constants";
import {fetchImagesByBreedId, fetchImagesByImageId, fetchImages} from "../constants/requests.constants";

export const BreedsPhotoLoader = (props) => {
    const [data, setData] = useState([]);
    const [photoData, setPhotoData] = useState([]);

    useEffect(() => {
        if(props.breedId) return
        if (props.imgId) return;
       fetchImages(props.limit)
            .then((response) => response.json())
            .then(res  => {
                const result= getUtls(res)
                setData(result)
                const capyData=[...photoData]
                setPhotoData([...capyData, ...res])
            })
            .catch((error) =>{
                console.error(`Failed to get images`, error);
            })
    }, [props.limit]);

    useEffect(() => {
        if(!props.breedId) return;
        fetchImagesByBreedId(props.breedId, props.limit)
        .then((response) => response.json())
        .then(res  => {
            const result= getUtls(res)
            setData(result)
            const capyData=[...photoData]
            setPhotoData([...capyData, ...res])
        })
        .catch((error) =>{
            console.error(`Failed to get images`, error);
        })
       }, [props.breedId,props.limit]);

    useEffect(() => {
        if(!props.imgId) return;
        fetchImagesByImageId(props.imgId)
            .then((response) => response.json())
            .then(res  => {
                setData([res.url])
                const capyData=[...photoData]
                setPhotoData([...capyData, res])
            })
            .catch((error) =>{
                console.error(`Failed to get images by id ${props.imgId}`, error);
            })
    }, [props.imgId]);

    return(
        <>
                {data.map((current)=>(
                <div className={`${styles.catImgBreedsDiv}`} key={current}>
                <Link
                    to={{
                        pathname: PATHS.photoDetails,
                        state: {
                            photoData,
                            url: current,
                            breedName: props.breedName
                        },

                    }}
                >
                    <img
                        className={`${styles.catImgBreeds} `}
                        src={current}
                        alt="cat"
                    />
                    <p className={styles.breedName}>{props.breedName}</p>
                </Link>
            </div>
                ))}
        </>
        )
}
