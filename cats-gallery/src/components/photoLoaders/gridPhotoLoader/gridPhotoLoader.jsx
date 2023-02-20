import React, { useEffect, useState } from 'react';
import styles from '../photoLoaders.module.scss';
import { Link } from 'react-router-dom';
import {getUtls} from "../photoLoaders.utils";
import {PATHS} from "../../constants/path.constants";
import {LoaringSpinner} from "../../loaringSpinner/loaringSpinner";
import {fetchImages } from "../../requests/request.utils";

export const GridPhotoLoader = (props) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

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
                        </Link>
                    </div>
                ))}
            </div>
        </>
    )
}
