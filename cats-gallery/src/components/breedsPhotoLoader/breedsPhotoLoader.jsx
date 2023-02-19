import React, { useEffect, useState } from 'react';
import styles from './breedsPhotoLoader.module.scss'
import { Link } from 'react-router-dom';
import {getUtls} from "./breedsPhotoLoader.utils";
import {PATHS} from "../constants/path.constants";
import {fetchImagesByBreedId, fetchImages} from "../constants/requests.constants";
import {useSelector} from "react-redux";
import {LoaringSpinner} from "../loaringSpinner/loaringSpinner";

export const BreedsPhotoLoader = (props) => {
    const [data, setData] = useState([]);
    const [breedName, setBreedName] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    const breedNameId = useSelector(state => state.breeds)

    useEffect(() => {
        if(props.breedId) return
        setIsLoading(true);
       fetchImages(props.limit)
            .then((response) => response.json())
            .then(res  => {
                const result= getUtls(res)
                setData(result)
                setIsLoading(false)
            })
            .catch((error) =>{
                console.error(`Failed to get images`, error);
            })
    }, [props.limit]);

    useEffect(() => {
        if(!props.breedId) return;
        setIsLoading(true);
        setBreedName((breedNameId.find(item => item.id === props.breedId)).name)
        fetchImagesByBreedId(props.breedId, props.limit)
        .then((response) => response.json())
        .then(res  => {
            const result= getUtls(res)
            setData(result)
            setIsLoading(false)
        })
        .catch((error) =>{
            console.error(`Failed to get images`, error);
        })
       }, [props.breedId,props.limit]);

    return(
        <>
            {isLoading && <LoaringSpinner />}
            <div className={styles.catImgBreedsWrapper}>
                {data.map((current)=>(
                <div className={`${styles.catImgBreedsDiv}`} key={current}>
                <Link
                    to={{
                        pathname: PATHS.photoDetails,
                        state: {
                            breedId: props.breedId,
                            url: current,
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
                </div>
        </>
        )
}
