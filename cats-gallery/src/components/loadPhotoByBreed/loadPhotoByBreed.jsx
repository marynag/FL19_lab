import React, { useEffect, useState } from 'react';
import styles from '../loadPhotoByBreed/loadPhotoByBreed.module.scss'
import { Link } from 'react-router-dom';
import {convertDataToArr, getImagesByBreedId, getImagesByImageId, getImagesCommon} from "./loadPhoto.utils";

export const LoadPhotoByBreed = (props) => {
    const [data, setData] = useState([]);
    const [photoData, setPhotoData] = useState([]);

    useEffect(() => {
        if(props.breedId) return
        if (props.imgId) return;
       getImagesCommon(props.limit)
            .then((response) => response.json())
            .then(res  => {
                const result= convertDataToArr(res)
                setData(result)
                const capyData=[...photoData]
                setPhotoData([...capyData, res[0]])
            })
            .catch((error) =>{
                console.log('Error:', error)
            })
    }, [props.limit]);

    useEffect(() => {
        if(!props.breedId) return;
        getImagesByBreedId(props.breedId, props.limit)
        .then((response) => response.json())
        .then(res  => {
            const result= convertDataToArr(res)
            setData(result)
            const capyData=[...photoData]
            setPhotoData([...capyData, res[0]])
        })
        .catch((error) =>{
            console.log('Error:', error)
        })
       }, [props.breedId,props.limit]);

    useEffect(() => {
        if(!props.imgId) return;
        getImagesByImageId(props.imgId)
            .then((response) => response.json())
            .then(res  => {
                setData([res.url])
                const capyData=[...photoData]
                setPhotoData([...capyData, res])
            })
            .catch((error) =>{
                console.log('Error:', error)
            })
    }, [props.imgId]);

    return(
        <>
                {data.map((current)=>(
                <div className={`${styles.catImgBreedsDiv}`} key={current}>
                <Link
                    to={{
                        pathname: `/img`,
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
