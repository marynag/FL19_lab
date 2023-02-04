import React, {useState} from 'react';
import styles from "./gallery.module.scss";
import {LoadPhotoByBreed} from "./loadPhotoByBreed";
import vector from "../../img/Vector.png";
import vector2 from "../../img/Vector (Stroke).png";
import vector3 from "../../img/Vector 348 (Stroke).png";
import vector4 from "../../img/Vector (Stroke) (1).png";
import {CLASSES_FOR_DIVS} from "./gallery.utils";

export const Gallery = () => {
    const [inputBreed, setInputBreed] = useState('');
    const [userBreed, setUserBreed] = useState('')

    const handleChange = (event) => {
        const breed=event.target.value
        setInputBreed(breed)
    }
    
    const handleBreed = () => {
        setUserBreed(inputBreed)
    }


    return(
        <div className={styles.voting}>

            <div className={styles.searchingLine}>
                <div className={styles.search}>
                    <input type="text"  column placeholder="Search for breeds by name" className={styles.searchInput} onChange={handleChange}/>
                    <div className={styles.searchItem} onClick={handleBreed}><img src={vector} alt="girl and pet" className={styles.search_img}/></div>
                </div>
                <div className={styles.reaction}><img src={vector2} alt="smile"/></div>
                <div className={styles.reaction}><img src={vector3} alt="heart"/></div>
                <div className={styles.reaction}><img src={vector4} alt="sad"/></div>
            </div>


            <div className={styles.votingWraper}>
                <div className={styles.votingBlockName}>
                    <p className={styles.next}>&lt;</p>
                    <p className={styles.vote}>BREEDS</p>
                </div>

                <div className={styles.catImgBreedsWrapper}>
                    {CLASSES_FOR_DIVS.map(current => <LoadPhotoByBreed breed={userBreed} className={current}/> )}
                </div>

            </div>
        </div>
    )
}
