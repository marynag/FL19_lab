import styles from './navigationBlocks.module.scss'
import PropTypes from 'prop-types';

export const NavigationBlocks = (props) =>{
  return(
    <div className='boxImgWraper'>
      <div className={`${styles.benefitBox} ${styles[props.className]}`}>
        <img src={props.imgname}  alt="benefit" />       
      </div>
      <button className={styles.btn}>{props.text}</button>
    </div>
  )
}

NavigationBlocks.propTypes = {
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
