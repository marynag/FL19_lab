
export default function countTime(msec){
    const SECOND_MS = 1000;
    const MINUTE_MS = SECOND_MS * 60;
    const HOUR_MS = MINUTE_MS * 60;
    
    const hours  =  Math.floor(msec/HOUR_MS);
    msec -= hours * HOUR_MS;   
    const minutes = Math.floor(msec / MINUTE_MS);
    msec -= minutes * MINUTE_MS;
    const seconds = Math.floor(msec / SECOND_MS);

    return {hours, minutes, seconds}
};

