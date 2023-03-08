import React from 'react';
import styles from './photoGrid.module.scss';
import { Link } from 'react-router-dom';
import {PATHS} from "../constants/path.constants";

export const PhotoGrid = ({photos}) =>{
    return(
        <>
            <div className={styles.catImgBreedsWrapper}>
                {photos.map((current) => (
                    <div className={`${styles.catImgBreedsDiv}`} key={current.url}>
                        <Link to={`${PATHS.switchToPhoto}${current.id}`}>
                            <img
                                className={`${styles.catImgBreeds} `}
                                src={current.url}
                                alt="cat"
                            />
                            {<p className={styles.breedName}>{current.overlay}</p>}
                        </Link>

                    </div>
                ))}
            </div>
        </>
    )
}
