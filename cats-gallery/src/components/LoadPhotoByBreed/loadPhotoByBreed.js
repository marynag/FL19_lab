import React, { useEffect, useState } from 'react';
import styles from '../LoadPhotoByBreed/LoadPhotoByBreed.module.scss'
import {CATS_URL, CATS_URL_BY_BREEDS} from '../constants/constants';

export const LoadPhotoByBreed = (props) => {
    const [data, setData] = useState();
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const url = props.breedId ? CATS_URL_BY_BREEDS+props.breedId : CATS_URL;
            fetch(url)
        .then((response) => response.json())
        .then(res  => {
            setData(res[0].url)
        })
       }, [props.breedId]);

    const handleMouseOver = () =>{
        setIsHovering(true);
    }

    const handleMouseOut = () =>{
        setIsHovering(false);
    }


    return(
        <>
            <div className ={`${styles.catImgBreeds} ${styles[props.className]}`}>
                <img className ={`${styles.catImgBreeds} `} src={data} alt="sad" onMouseOver={handleMouseOver}
               onMouseOut={handleMouseOut}/>
                {isHovering && <p className={styles.breedName}>{props.breedName}</p>}
            </div>
        </>
        )
}
