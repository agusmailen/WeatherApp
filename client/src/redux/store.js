import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import reducers from './reducers/index';

const middleware = applyMiddleware(promise, thunk);


let store = createStore(reducers, middleware);

export default store;
