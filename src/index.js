import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './redux/store/store.js';

/** Main Container */
import App from './App';

/** Provider is used here to pass store in child components. */
ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));