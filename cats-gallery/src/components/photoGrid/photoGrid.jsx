import React from 'react';
import styles from './photoGrid.module.scss';
import { Link } from 'react-router-dom';
import {PATHS} from "../constants/path.constants";

export const PhotoGrid = ({photos, Overlay}) =>{
    return(
            <div className={styles.catImgBreedsWrapper}>
                {photos.map((current) => (
                    <div className={`${styles.catImgBreedsDiv}`} key={current.url}>
                        <Link to={`${PATHS.switchToPhoto}${current.id}`}>
                            <img
                                className={`${styles.catImgBreeds} `}
                                src={current.url}
                                alt="cat"
                            />
                            <Overlay breed={current.breed} />
                        </Link>

                    </div>
                ))}
            </div>
    )
}
