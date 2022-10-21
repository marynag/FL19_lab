import styles from '../voting/voting.module.scss'
import React from 'react';
import PropTypes from 'prop-types';

export const RecordReaction = (props) => {
   
    const { history } = props;
    const { time } = props;
    const { currentReactionSad, currentReactionLike, currentReactionSmile } = props.icon;
    const iconLink = currentReactionSad ?? currentReactionLike ?? currentReactionSmile;
  return(
        <div className={styles.reactionDescription}>
            <p>{time}</p>
            <p>Image ID: <b>{history[history.length-1]}</b> was added to {props.text}</p>
            <img className={styles.reactionImg} src={iconLink} alt='reaction'/>
        </div>
  );
  };


RecordReaction.propTypes = {
  history: PropTypes.array,
  icon: PropTypes.object,
  text: PropTypes.string
};