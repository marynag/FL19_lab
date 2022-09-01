import './addnavigationBlocks.css'


var classNames = require('classnames');

function AddNavigationBlocks(props){
    let divclasses=classNames('benefitBox', props.boxing)
    return(
      <div className='boxImgWraper'>
        <div className={divclasses}>
          <img src={props.imgname}  alt="benefit" />        
        </div>
        <button className="btn">{props.text}</button>
      </div>
    )
  }

export default AddNavigationBlocks