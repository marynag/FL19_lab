import React from 'react';
import styles from './photoGrid.module.scss';
import { Link } from 'react-router-dom';
import {PATHS} from "../constants/path.constants";
import {useSelector} from "react-redux";
import {getBreedNameId} from "../../store/selectors";

export const PhotoGrid = ({photos, breedId}) =>{
    const breedNameId = useSelector(getBreedNameId)

    const matchedBreed =breedId ?  breedNameId.find((breed) => {
        return breed.id == breedId
    }) : null
    const breedName = breedId ? matchedBreed.name : null

    return(
        <>
            <div className={styles.catImgBreedsWrapper}>
                {photos.map((current)=>(
                    <div className={`${styles.catImgBreedsDiv}`} key={current}>
                        <Link
                            to={{
                                pathname: PATHS.photoDetails,
                                state: {
                                    url: current,
                                },

                            }}
                        >
                            <img
                                className={`${styles.catImgBreeds} `}
                                src={current}
                                alt="cat"
                            />
                            {breedName && <p className={styles.breedName}>{breedName}</p>}
                        </Link>

                    </div>
                ))}
            </div>
        </>
    )
}
