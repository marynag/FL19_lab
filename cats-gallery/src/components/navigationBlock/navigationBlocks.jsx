import styles from './navigationBlocks.module.scss'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

export const NavigationBlocks = (props) =>{
  return(
        <div className='boxImgWraper'>
          <div className={`${styles.benefitBox} ${styles[props.className]}`}>
            <img src={props.imgname}  alt="benefit" />
          </div>
            <Link to={props.path}>
                <button className={styles.btn}>{props.text}</button>
            </Link>
        </div>
  )
}

NavigationBlocks.propTypes = {
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
