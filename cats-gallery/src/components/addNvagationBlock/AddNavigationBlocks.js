import './addnavigationBlocks.css'
import classNames from 'classnames';

function AddNavigationBlocks(props){
    const divclasses=classNames('benefitBox', props.className)
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