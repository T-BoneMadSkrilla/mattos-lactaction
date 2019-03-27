import {createStore, applyMiddleware, compose} from 'redux';
import promiseMiddleware from "redux-promise-middleware";
import userReducer from "./reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const middlewares = composeEnhancers(applyMiddleware(promiseMiddleware()));
const store = createStore(userReducer, composeEnhancers(applyMiddleware(promiseMiddleware())));

export default store;



//need milk and see any milk in area
// milk sharing 

//15 oz 

// set time out on how long a message is 'disappread from the site' around 2 hours 

// 30 oz a day to feed a baby

// 

// import { createStore, applyMiddleware, compose } from "redux";
// import promiseMiddleware from "redux-promise-middleware";
// import reducer from './ducks/user';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(
//   reducer,
//   /* preloadedState, */ composeEnhancers(applyMiddleware(promiseMiddleware()))
// );

// export default store;