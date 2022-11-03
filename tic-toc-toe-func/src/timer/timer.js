import React, {useEffect, useState} from 'react';
import convertTime from './timer.util'

export const Timer = (props) =>{
  const [time, setTime] = useState(0);

  const {isGameFinished} = props;

  useEffect(() =>{
    let interval = null;
    if(!isGameFinished){
      interval = setInterval(() => {
        setTime(time => time + 1);
      }, 1000);
    }else{
      clearInterval(interval)
    }
    return () => clearInterval(interval);
  }, [time]);

  const convertedTime=convertTime(time)

      return (
        <div>
          <p>Timer:</p>
          <p>{convertedTime.hours}:{convertedTime.minutes}:{convertedTime.seconds}</p>
        </div>
      )
}
 