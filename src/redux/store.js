import { legacy_createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import typingSaga from "./typing/typingSaga";
import typingReducer from './typing/typing.reducer';

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// combine the reducer
const rootReducer = combineReducers({ typing: typingReducer })

// Create the Redux store with middleware
const store = legacy_createStore(rootReducer, applyMiddleware(sagaMiddleware));

// Run the root saga
sagaMiddleware.run(typingSaga);

export default store;