import { put, take, takeEvery, select, delay, all } from 'redux-saga/effects';
import { START_TIMER, TIMER_FINISHED, UPDATE_KEY_COUNT } from './typing.actionTypes';
import calculateAccuracy from '../../helper/calculateAccuracy';
import { updateAccuracy } from './typing.action';

// update key count and accuracy
function* updateKeyCountSaga(action) {
    const { referenceKeys, correctKeyCount } = yield select((state) => state.typing);
    const accuracy = calculateAccuracy(referenceKeys.length, correctKeyCount);
    yield put(updateAccuracy(accuracy));
}

// Watcher saga to listen for key count updates
function* watchKeyCountUpdate() {
    yield takeEvery(UPDATE_KEY_COUNT, updateKeyCountSaga);
}

function* typingTimer() {
    yield delay(5 * 60 * 1000);
    yield put({ type: TIMER_FINISHED });
}

// Watcher saga to listen for start timer
export function* watchPractice() {
    yield takeEvery(START_TIMER, typingTimer);
}

// Root saga
export default function* typingSaga() {
    yield all([watchPractice(), watchKeyCountUpdate()]);
}