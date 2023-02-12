import vector from '../../img/Vector.png'
import vector2 from '../../img/Vector (Stroke).png'
import vector3 from '../../img/Vector 348 (Stroke).png'
import vector4 from '../../img/Vector (Stroke) (1).png'
import styles from './searchImg.module.scss'
import { useState } from 'react';

export const SearchImg = (props) => {
    const [userInput, setuserInput] = useState('');

    const handleChange = (event) => {
        setuserInput(event.target.value)
    }

    const handleClick = () =>{
        props.onChange(userInput)
    }

    return(
        <div className={styles.searchingLine}>
                <div className={styles.search}>
                    <input type="text" value={userInput} column placeholder="Search image by id" className={styles.searchInput} onChange={handleChange}/>
                    <div className={styles.searchItem} onClick={handleClick}><img src={vector} alt="girl and pet" className={styles.search_img}/></div>
                </div>            
                <div className={styles.reaction}><img src={vector2} alt="smile"/></div>
                <div className={styles.reaction}><img src={vector3} alt="heart"/></div>
                <div className={styles.reaction}><img src={vector4} alt="sad"/></div>
        </div> 
    )
}
