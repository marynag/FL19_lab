import searchPanel from '../../img/Vector.png'
import styles from './searchingBar.module.scss'
import React from 'react';
import {REACTIONS} from "./searchingBar.constants";
import {useSelector} from "react-redux";
import {getBreedInfo} from "../../store/selectors";

export const SearchingBar = (props) => {
    const input = React.createRef();

    const breedNameId = useSelector(getBreedInfo)
    const handleClick = () =>{
        const matchedBreed = Object.entries(breedNameId).find((breed) => {
            const {name} = breed[1]
            return (name.toLowerCase().includes(input.current.value.toLowerCase()) )
         })

        const matchedBreedId = matchedBreed[1].id
        props.onChange(matchedBreedId)
    }

    return(
        <div className={styles.searchingLine}>
                <div className={styles.search}>
                    <input type="text"  column placeholder="Search for breeds by name" className={styles.searchInput} ref={input}/>
                    <div className={styles.searchItem} onClick={handleClick}><img src={searchPanel} alt="search" className={styles.search_img}/></div>
                </div>
            { REACTIONS.map(current => (<div key={current.name} className={styles.reaction}>
                <img src={current.img} alt={current.name}/>
            </div>))}
        </div> 
    )
}
