import styles from "../breeds/breeds.module.scss";
import React from "react";

export const BreedOverlay = ({breed}) =>{
    return(
        <p className={styles.breedName}>{breed.name}</p>
    )
}