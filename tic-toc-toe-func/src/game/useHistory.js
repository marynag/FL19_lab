import {useRef} from 'react';
import {SQUARES_AMOUNT} from '../constants'

const INIT_RECORD = Array(SQUARES_AMOUNT).fill(undefined);

export const useHistory = () => {
    const historyStorage = useRef([INIT_RECORD]);
    const history = historyStorage.current;
    const records = historyStorage.current;
    const size = history.length;
    const lastRecord = records[size - 1];

    const addMove = (squareIndex, player) => {
        const record = [...lastRecord];

        record[squareIndex] = player

        historyStorage.current = [...historyStorage.current, record];
    }

    const backTo = (step)=>{
        historyStorage.current = historyStorage.current.slice(0,step+1)
    }

    return { records, size, lastRecord, addMove, backTo};
}