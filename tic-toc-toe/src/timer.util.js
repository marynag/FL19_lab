
export default function convertTime(duration){
    const MINUTE_IN_SECONDS = 60;
    const HOUR_IN_SECONDS = MINUTE_IN_SECONDS * 60;    

    const hours = Math.floor(duration / HOUR_IN_SECONDS);

    const minutesS = duration % HOUR_IN_SECONDS;
    const minutes = Math.floor(minutesS / MINUTE_IN_SECONDS);

    const seconds=duration% MINUTE_IN_SECONDS;

    return {hours, minutes, seconds}
};
