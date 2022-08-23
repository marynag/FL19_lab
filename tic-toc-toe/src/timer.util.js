
export default function countTime(secondsFromStart){
    const SECOND=1
    const MINUTE_IN_SECONDS = SECOND * 60;
    const HOUR_IN_SECONDS = MINUTE_IN_SECONDS * 60;    

    const hours = Math.floor(secondsFromStart / HOUR_IN_SECONDS);

    const minutesS = secondsFromStart % HOUR_IN_SECONDS;
    const minutes = Math.floor(minutesS / MINUTE_IN_SECONDS);

    const seconds=secondsFromStart% MINUTE_IN_SECONDS

    return {hours, minutes, seconds}
};

