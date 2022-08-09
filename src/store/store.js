import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { comicsReducer } from "../reducers/comicsReducer";
import { comicReducer } from "../reducers/comicReducer";
import thunk from 'redux-thunk'
import { modalReducer } from "../reducers/modalReducer";

const reducers = combineReducers({
    comics: comicsReducer,
    comic: comicReducer,
    modal: modalReducer
});

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware( thunk )
    )
);