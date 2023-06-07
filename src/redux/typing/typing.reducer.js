import { START_TIMER, TIMER_FINISHED, UPDATE_ACCURACY, UPDATE_KEY_COUNT } from "./typing.actionTypes"

const initialState = {
    isTyping: false,
    typedKeys: [],
    keyCount: 0,
    correctKeyCount: 0,
    accuracy: 100,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case START_TIMER:
            return { ...state, typedKeys: [], isTyping: true };

        case TIMER_FINISHED:
            return { ...state, isTyping: false };

        case UPDATE_KEY_COUNT:
            return {
                ...state,
                typedKeys: [...state.typedKeys, action.payload],
                keyCount: state.keyCount + 1,
                correctKeyCount: action.isCorrect ? state.correctKeyCount + 1 : state.correctKeyCount,
            };


        case UPDATE_ACCURACY:
            return {
                ...state,
                accuracy: action.payload,
            };

        default:
            return state;
    }
};

export default reducer;
