import { createStore } from 'redux';
import integratedReducer from '../reducers';

/** Create store with reducer. */
const store = createStore(integratedReducer);

export default store;