import { combineReducers } from 'redux';
import { testReducer } from './test-reducer.js';

/** Combine all the reducers and export one. */
const integratedReducer = combineReducers({
    testReducer: testReducer,
});
export default integratedReducer;