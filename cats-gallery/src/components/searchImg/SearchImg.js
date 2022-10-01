import Vector from '../img/Vector.png'
import Vector2 from '../img/Vector (Stroke).png'
import Vector3 from '../img/Vector 348 (Stroke).png'
import Vector4 from '../img/Vector (Stroke) (1).png'
import styles from './searchImg.module.scss'

function SearchImg(){
    return(
        <div className={styles.searchingLine}>
                <div className={styles.search}>
                    <input type="text"  column placeholder="Search for breeds by name" className={styles.searchInput}/>                   
                    <div className={styles.searchItem}><img src={Vector} alt="girl and pet" className={styles.search_img}/></div>
                </div>            
                <div className={styles.reaction}><img src={Vector2} alt="smile"/></div>
                <div className={styles.reaction}><img src={Vector3} alt="heart"/></div>
                <div className={styles.reaction}><img src={Vector4} alt="sad"/></div>
        </div> 
    )
}

export default SearchImg