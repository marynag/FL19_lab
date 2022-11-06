import {useRef} from 'react';
import {SQUARES_AMOUNT} from '../constants'

const INIT_RECORD = Array(SQUARES_AMOUNT).fill(undefined);

export const useHistory = () => {
    const historyStorage = useRef([INIT_RECORD]);
    const history = historyStorage.current;
    const records = historyStorage.current;
    const size = history.length;
    const lastRecord = history[history.length - 1];

    const add = record => {
        historyStorage.current = [...historyStorage.current, record];
    }

    const slice = (step)=>{
        historyStorage.current = historyStorage.current.slice(0,step+1)
    }

    return { records, size, lastRecord, add, slice};
}