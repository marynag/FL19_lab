import styles from '../voting/voting.module.scss'
import React, {useState} from 'react';
import { getTime } from '../voting/voting.utils';
import PropTypes from 'prop-types';



export default function AddReaction(props){
    const [time, setTime] = useState(getTime())
    const history=props.history
    const { currentReactionSad, currentReactionLike, currentReactionSmile } = props.icon;
    const iconLink = currentReactionSad ?? currentReactionLike ?? currentReactionSmile;
    console.log(history)
  return(
        <div className={styles.reactionDescription}>
            <p>{time}</p>
            <p>Image ID: <b>{history[history.length-1]}</b> was added to {props.text}</p>
            <img className={styles.reactionImg} src={iconLink} alt='reaction'/>
        </div>
  );
  };



AddReaction.propTypes = {
  history: PropTypes.array,
  icon: PropTypes.object,
  text: PropTypes.string  
};