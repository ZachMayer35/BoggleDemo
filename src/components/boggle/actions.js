export const START = 'BOGGLE_START';
export const SHUFFLE = 'BOGGLE_SHUFFLE';
export const UPDATE_CELL = 'BOGGLE_UPDATE_CELL';
export const RESET = 'BOGGLE_RESET';
export const CHECK_WORD = 'BOGGLE_CHECK_WORD';
export const SUBMIT_WORD = 'BOGGLE_SUBMIT_WORD';


export const start = () => ({
    type: START
});
export const shuffle = () => ({
    type: SHUFFLE
});
export const updateCell = (cell) => ({
    type: UPDATE_CELL,
    x: cell.x,
    y: cell.y,
    value: cell.value
});
export const reset = () => ({
    type: RESET
});

