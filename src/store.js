import { createStore, applyMiddleware,compose,combineReducers } from "redux";
import thunk from "redux-thunk";
import { productsReducer } from "./reducers/productsReducers";

const initialState= {};
const reducer = combineReducers({
    products: productsReducer,
});

//send All info about the redux store to the chrome redux dev tools
// and monitor whatever happened there including actions saddles and any other data
 const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
initialState,
composeEnhancer(applyMiddleware(thunk))
);
export default store;