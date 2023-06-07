import { put, takeEvery, select, delay, all } from 'redux-saga/effects';
import { START_TIMER, TIMER_FINISHED, UPDATE_KEY_COUNT } from './typing.actionTypes';
import calculateAccuracy from '../../helper/calculateAccuracy';
import { updateAccuracy } from './typing.action';


// Worker saga to update key count and accuracy
function* updateKeyCountSaga(action) {
    const { payload } = action;
    const typedKeys = yield select((state) => state.typing.typedKeys);
    const isCorrect = payload === typedKeys[typedKeys.length - 1];
    yield put({ type: UPDATE_KEY_COUNT, payload, isCorrect });
    const { keyCount, correctKeyCount } = yield select((state) => state.typing);
    const accuracy = calculateAccuracy(keyCount, correctKeyCount);
    yield put(updateAccuracy(accuracy));
}

// Watcher saga to listen for key count updates
function* watchKeyCountUpdate() {
    yield takeEvery(UPDATE_KEY_COUNT, updateKeyCountSaga);
}

function* typingTimer() {
    yield takeEvery(START_TIMER, function* () {
        yield delay(5 * 60 * 1000); // 5 minutes delay
        yield put({ type: TIMER_FINISHED });
    });
}

// Watcher saga to listen for start timer
export function* watchPractice() {
    yield takeEvery(START_TIMER, typingTimer);
}

// Root saga
export default function* typingSaga() {
    yield all([watchKeyCountUpdate(), watchPractice()]);
}