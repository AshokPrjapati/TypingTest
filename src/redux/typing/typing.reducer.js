import { SET_CURRENT_KEY, SET_TYPED_KEYS, START_TIMER, TIMER_FINISHED, UPDATE_ACCURACY, UPDATE_KEY_COUNT } from "./typing.actionTypes"

const initialState = {
    isTyping: false,
    typedKeys: [],
    referenceKeys: [],
    correctKeyCount: 0,
    accuracy: 100,
    currentKey: "s"
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case START_TIMER:
            return { ...state, typedKeys: [], referenceKeys: [], typedKeys: [], isTyping: true, accuracy: 100, correctKeyCount: 0 };

        case TIMER_FINISHED:
            return { ...state, isTyping: false, };

        case SET_TYPED_KEYS:
            return {
                ...state,
                typedKeys: [...state.typedKeys, action.payload],
            }

        case UPDATE_KEY_COUNT:
            return {
                ...state,
                correctKeyCount: action.isCorrect ? state.correctKeyCount + 1 : state.correctKeyCount,
            };


        case UPDATE_ACCURACY:
            return {
                ...state,
                accuracy: action.payload,
            };

        case SET_CURRENT_KEY:
            return {
                ...state,
                currentKey: action.payload,
                referenceKeys: [...state.referenceKeys, action.payload],
            }

        default:
            return state;
    }
};

export default reducer;
