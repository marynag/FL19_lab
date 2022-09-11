import styles from  './addnavigationBlocks.module.scss'
import classNames from 'classnames';
import PropTypes from 'prop-types';

function AddNavigationBlocks(props){
  const divclasses=classNames(`${styles.benefitBox} ${styles[props.className]}`)
  return(
    <div className='boxImgWraper'>
      <div className={divclasses}>
        <img src={props.imgname}  alt="benefit" />       
      </div>
      <button className={styles.btn}>{props.text}</button>
    </div>
  )
}

AddNavigationBlocks.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
};

export default AddNavigationBlocks