import rootReducer from './reducers';

// const composeEnhancers =  
//   typeof window === 'object' &&
//   (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     : compose);

// const Store = () =>{   
//     const middlewares = [];
//     const store = createStore(rootReducer, {}, composeEnhancers(applyMiddleware(...middlewares)));
//     return store;
//   }

import { createStore } from "redux";
const Store = createStore(rootReducer);

export default Store;