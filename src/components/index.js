import React from 'react';

import { Provider } from 'react-redux';
import  { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';

import reducers from '../reducers';
import App from './app/app';

//add promise middleware
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

export default() => {
    return (
        <Provider store={createStoreWithMiddleware(reducers)}>
            <App />
        </Provider>
    );
}