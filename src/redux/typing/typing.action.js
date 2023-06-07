import * as Types from "./typing.actionTypes"


// timer actions
export const startTimer = () => ({ type: Types.START_TIMER });

export const timerFinished = () => ({ type: Types.TIMER_FINISHED });

// keypress actions
export const updateKeyCount = (key, isCorrect) => ({
    type: Types.UPDATE_KEY_COUNT,
    payload: key,
    isCorrect,
});

export const updateAccuracy = (accuracy) => ({
    type: Types.UPDATE_ACCURACY,
    payload: accuracy,
});

export const setCurrentKey = (key) => ({
    type: Types.SET_CURRENT_KEY,
    payload: key,
});