import React, { useEffect, useState } from 'react';
import styles from '../loadPhotoByBreed/loadPhotoByBreed.module.scss'
import { CATS_URL_BY_BREEDS, IMG_BY_ID } from '../constants/constants';
import { Link } from 'react-router-dom';

export const LoadPhotoByBreed = (props) => {
    const [data, setData] = useState();
    const [isHovering, setIsHovering] = useState(false);
    const [photoData, setPhotoData] = useState([]);
    const [url, setUrl] = useState(CATS_URL_BY_BREEDS+'beng')

    useEffect(() => {
        if(props.breedId){
            setUrl(CATS_URL_BY_BREEDS+props.breedId);
        }
            fetch(url)
        .then((response) => response.json())
        .then(res  => {
            setData(res[0].url)
            const capyData=[...photoData]
            setPhotoData([...capyData, res[0]])
        })
       }, [props.breedId]);

    useEffect(() => {
        if(props.imgId) {
            setUrl(IMG_BY_ID + props.imgId);
        }
        fetch(IMG_BY_ID + props.imgId)
            .then((response) => response.json())
            .then(res  => {
                setData(res.url)
                const capyData=[...photoData]
                setPhotoData([...capyData, res])
            })
    }, [props.imgId]);

    const handleMouseOver = () =>{
        setIsHovering(true);
    }

    const handleMouseOut = () =>{
        setIsHovering(false);
    }
    return(
        <>
            <div className ={`${styles[props.className]} , ${styles.catImgBreedsDiv}`}>
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
