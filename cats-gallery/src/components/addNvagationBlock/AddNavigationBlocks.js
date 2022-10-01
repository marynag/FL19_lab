import styles from  './addnavigationBlocks.module.scss'
import PropTypes from 'prop-types';

function AddNavigationBlocks(props){
  return(
    <div className='boxImgWraper'>
      <div className={`${styles.benefitBox} ${styles[props.className]}`}>
        <img src={props.imgname}  alt="benefit" />       
      </div>
      <button className={styles.btn}>{props.text}</button>
    </div>
  )
}

AddNavigationBlocks.propTypes = {
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default AddNavigationBlocks