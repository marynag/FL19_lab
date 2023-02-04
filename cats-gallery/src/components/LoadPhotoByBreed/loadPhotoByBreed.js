import React, { useEffect, useState } from 'react';
import styles from '../LoadPhotoByBreed/LoadPhotoByBreed.module.scss'
import {CATS_URL, CATS_URL_BY_BREEDS} from '../constants/constants';
import {Link} from "react-router-dom";

export const LoadPhotoByBreed = (props) => {
    const [data, setData] = useState();
    const [isHovering, setIsHovering] = useState(false);
    const [photoData, setPhotoData] = useState([]);

    useEffect(() => {
        const url = props.breedId ? CATS_URL_BY_BREEDS+props.breedId : CATS_URL;
            fetch(url)
        .then((response) => response.json())
        .then(res  => {
            setData(res[0].url)
            const capyData=[...photoData]
            setPhotoData([...capyData, res[0]])
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
            <div className ={`${styles.catImgBreeds}, ${styles[props.className]}`}>
                <Link
                to={{
                    pathname: `/img`,
                    state:  {photoData,
                        url: data,
                        breedName:props.breedName
                    },

                }}
            >
                    <img
                    className={`${styles.catImgBreeds} `}
                       src={data} alt="sad"
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}
                    />
                    {props.breedName ? (isHovering && <p className={styles.breedName}>{props.breedName}</p>) : null}
                </Link>
            </div>
        </>
        )
}
