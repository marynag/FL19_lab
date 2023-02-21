import searchPanel from '../../img/Vector.png'
import styles from './searchingBar.module.scss'
import React from 'react';
import {useSelector} from "react-redux";
import {getBreedNameId} from "../../store/selectors";
import {ReactionBar} from "../reactionBar/reactionBar";

export const SearchBar = (props) => {
    const input = React.createRef();
    const breedNameId = useSelector(getBreedNameId)

    const handleClick = () =>{
        const matchedBreed = (breedNameId).find((breed) => {
            const {name} = breed
           return (name.toLowerCase().includes(input.current.value.toLowerCase()) )
         })

        const matchedBreedId = matchedBreed.id
        props.onChange(matchedBreedId)
    }

    return(
        <div className={styles.searchingLine}>
                <div className={styles.search}>
                    <input type="text"  column placeholder="Search for breeds by name" className={styles.searchInput} ref={input}/>
                    <div className={styles.searchItem} onClick={handleClick}><img src={searchPanel} alt="search" className={styles.search_img}/></div>
                </div>
            <ReactionBar />
        </div> 
    )
}
