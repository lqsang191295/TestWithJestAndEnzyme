import {applyMiddleware, createStore, compose} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import reducer from '../reducers';

const enhancers = [applyMiddleware(thunkMiddleware)];

const composeEnhancers = __DEV__ ? composeWithDevTools : compose;

const enhancer = composeEnhancers(...enhancers);

export default createStore(reducer, {}, enhancer);
