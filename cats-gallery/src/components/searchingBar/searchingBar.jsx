import SearchPanel from '../../img/Vector.png'
import styles from './searchingBar.module.scss'
import React from 'react';
import {REACTIONS} from "./searchingBar.constants";
import {useSelector} from "react-redux";
import {getBreedNameId} from "../breeds/breeds.utils";

export const SearchingBar = (props) => {
    const input = React.createRef();

    const breedInfo = useSelector(state => state.breeds)
    const breedNameId = getBreedNameId(breedInfo)

    const handleClick = () =>{
        const breedName=Object.keys(breedNameId).find((key) => {
             return breedNameId[key].toLowerCase().includes(input.current.value.toLowerCase())
        })

        const breedId = breedNameId[breedName]
        props.onChange(breedId)
    }

    return(
        <div className={styles.searchingLine}>
                <div className={styles.search}>
                    <input type="text"  column placeholder="Search for breeds by name" className={styles.searchInput} ref={input}/>
                    <div className={styles.searchItem} onClick={handleClick}><img src={SearchPanel} alt="search" className={styles.search_img}/></div>
                </div>
            { REACTIONS.map(current => (<div key={current.name} className={styles.reaction}>
                <img src={current.img} alt={current.name}/>
            </div>))}
        </div> 
    )
}
