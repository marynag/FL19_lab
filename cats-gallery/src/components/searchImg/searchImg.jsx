import imgSearch from '../../img/Vector.png'
import styles from './searchImg.module.scss'
import React, { useState } from 'react';
import {REACTIONS} from "./searchImg.utils";

export const SearchImg = (props) => {
    const [userInput, setUserInput] = useState('');

    const handleChange = (event) => {
        setUserInput(event.target.value)
    }

    const handleClick = () =>{
        props.onChange(userInput)
    }

    return(
        <div className={styles.searchingLine}>
                <div className={styles.search}>
                    <input type="text" value={userInput} column placeholder="Search image by id" className={styles.searchInput} onChange={handleChange}/>
                    <div className={styles.searchItem} onClick={handleClick}><img src={imgSearch} alt="search" className={styles.search_img}/></div>
                </div>
            { REACTIONS.map(current => (<div key={current.name} className={styles.reaction}>
                <img src={current.img} alt={current.name}/>
            </div>))}
        </div> 
    )
}
