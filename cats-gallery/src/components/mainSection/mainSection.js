import './mainSection.module.scss';
import girlDog from '../img/girl-and-pet 1.png'
import styles from "./mainSection.module.scss";

export const MainSection = () => {
  return (
    <div className={styles.girlDog}>
        <img className={styles.imgGirlDog} src={girlDog} alt="girl and pet"/>
    </div>
  );
}

