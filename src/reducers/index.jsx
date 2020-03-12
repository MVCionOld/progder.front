import {applyMiddleware, combineReducers, createStore} from "redux";
import popupReducer from "./popup";


const logger = store => next => action => {
    console.groupCollapsed("dispatching", action.type);
    console.log('prev state', store.getState());
    console.log('action', action);
    let result = next(action);
    console.log('next state', store.getState());
    console.groupEnd();
    return result;
};

const saver = store => next => action => {
    return next(action);
};

const initStorage = (initalState={}) => {
    return initalState;
};

export const storeFactory = (initialState={}) => (
    applyMiddleware(logger, saver)(createStore)(
        combineReducers({
            popupReducer,
        }), initStorage(initialState)
    )
);