import React from 'react';
import Vector from './img/Vector.png'
import Vector2 from './img/Vector (Stroke).png'
import Vector3 from './img/Vector 348 (Stroke).png'
import Vector4 from './img/Vector (Stroke) (1).png'
import Vector5 from './img/ba.png'
import Vector6 from './img/ab.png'

var classNames = require('classnames');

class LoadImg extends React.Component{
    constructor(props){
        super()
        this.state ={
            loading:false,
            img:'https://cdn2.thecatapi.com/images/bn8.jpg',
            addClass:props.addClass
        }
    }
    componentDidMount(){
        this.setState({loading:true})
        fetch("https://api.thecatapi.com/v1/images/search")
            .then(response => response.json())
            .then(data =>{
                this.setState({
                    loading: false,
                    img:data
                })
            })
    }
    render(){
        let imgclasses=classNames('catImgBreeds', this.state.addClass)
        const catImg=this.state.loading ? "loading..." : this.state.img[0]
        console.log(catImg)
  
        return(
            <img className ={imgclasses} src={catImg.url}alt="sad"/>
        )
    }
}


function Breeds(){
    return(
        <div className="breedsBlock ">
            <div className="searchingLine">
                <div className="search ">
                    <input type="text"  column placeholder="Search for breeds by name" className="searchInput"/>                   
                    <div className="searchItem"><img src={Vector} alt="girl and pet" className="search_img"/></div>
                </div>            
                <div className="reaction "><img src={Vector2} alt="smile"/></div>
                <div className="reaction "><img src={Vector3} alt="heart"/></div>
                <div className="reaction "><img src={Vector4} alt="sad"/></div>
            </div> 

        <div className='wraperImgBlokSearchImages'>
        <div className="wraperImgBlokSearch">
                <div className="headerBreeds">
                    <p className="next">&lt;</p>
                    <p className="vote">BREEDS</p>
                    <select className="vote breedSelect">
                        <option>All breeds</option>    
                        <option>Abyssinian</option>
                        <option>Aegean</option>
                        <option>American Bobtail</option>
                        <option>American Curl</option>
                        <option>American Shorthair</option>
                        <option>American Wirehair</option>
                        <option>...</option>
                    </select>
                    <select className="vote breedsLimit">
                        <option>Limit: 5</option>    
                        <option>Limit: 10</option>    
                        <option>Limit: 15</option>    
                        <option>Limit: 20</option>    
                    </select>
                    <div className="sortImg"><img className="sort" src={Vector5} alt="sort" /></div>
                    <div className="sortImg"><img className="sort sort1" src={Vector6} alt="sort" /></div>
                </div>
            </div>
            <div className='catImgBreedsWrapper'>
                <LoadImg addClass='catImgBreedsDiv1'/>
                <LoadImg addClass='catImgBreedsDiv2'/>
                <LoadImg addClass='catImgBreedsDiv3'/>
                <LoadImg addClass='catImgBreedsDiv4'/>
                <LoadImg addClass='catImgBreedsDiv5'/>
                <LoadImg addClass='catImgBreedsDiv6'/>
                <LoadImg addClass='catImgBreedsDiv7'/>
                <LoadImg addClass='catImgBreedsDiv8'/>
                <LoadImg addClass='catImgBreedsDiv9'/>
                <LoadImg addClass='catImgBreedsDiv10'/>
                <LoadImg addClass='catImgBreedsDiv11'/>
                <LoadImg addClass='catImgBreedsDiv12'/>
                <LoadImg addClass='catImgBreedsDiv13'/>
                <LoadImg addClass='catImgBreedsDiv14'/>
                <LoadImg addClass='catImgBreeds15'/>
            </div>
        </div>           
    </div>
    )
}


export default Breeds

