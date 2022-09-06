import Vector from '../img/Vector.png'
import Vector2 from '../img/Vector (Stroke).png'
import Vector3 from '../img/Vector 348 (Stroke).png'
import Vector4 from '../img/Vector (Stroke) (1).png'
import './searchImg.css'

function SearchImg(){
    return(
        <div className="searchingLine">
                <div className="search ">
                    <input type="text"  column placeholder="Search for breeds by name" className="searchInput"/>                   
                    <div className="searchItem"><img src={Vector} alt="girl and pet" className="search_img"/></div>
                </div>            
                <div className="reaction "><img src={Vector2} alt="smile"/></div>
                <div className="reaction "><img src={Vector3} alt="heart"/></div>
                <div className="reaction "><img src={Vector4} alt="sad"/></div>
        </div> 
    )
}

export default SearchImg