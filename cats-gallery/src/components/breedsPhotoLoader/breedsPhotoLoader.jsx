import React, { useEffect, useState } from 'react';
import styles from './breedsPhotoLoader.module.scss'
import { Link } from 'react-router-dom';
import {getUtls} from "./breedsPhotoLoader.utils";
import {PATHS} from "../constants/path.constants";
import {fetchImagesByBreedId, fetchImages} from "../constants/requests.constants";
import {useSelector} from "react-redux";
import {getBreedNameId} from "../breeds/breeds.utils";

export const BreedsPhotoLoader = (props) => {
    const [data, setData] = useState([]);
    const [photoData, setPhotoData] = useState([]);
    const [breedName, setBreedName] = useState('')

    const breedInfo = useSelector(state => state.breeds)
    const breedNameId = getBreedNameId(breedInfo)

    useEffect(() => {
        if(props.breedId) return
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
        setBreedName(Object.keys(breedNameId).find(key => breedNameId[key] === props.breedId))
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
                            breedName: breedName
                        },

                    }}
                >
                    <img
                        className={`${styles.catImgBreeds} `}
                        src={current}
                        alt="cat"
                    />
                    <p className={styles.breedName}>{breedName}</p>
                </Link>
            </div>
                ))}
        </>
        )
}
