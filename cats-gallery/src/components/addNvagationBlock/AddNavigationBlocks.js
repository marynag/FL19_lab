import styles from  './addnavigationBlocks.module.scss'
import classNames from 'classnames';

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

export default AddNavigationBlocks