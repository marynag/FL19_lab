import React from 'react';
import styles from './photoGrid.module.scss';
import { Link } from 'react-router-dom';
import { getId } from "./photoGrid.utils";
export const PhotoGrid = ({photos}) =>{

    return(
        <div>
            <div className={styles.catImgBreedsWrapper}>
                {photos.map((current) => (
                    <div className={`${styles.catImgBreedsDiv}`} key={current}>
                        <Link to={`/photo/${getId(current.url)}`}>
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
        </div>
    )
}
