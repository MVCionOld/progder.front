import {createStore, combineReducers, applyMiddleware} from "redux";


const logger = store => next => action => {
    console.groupCollapsed("dispatching", action.type);
    console.log('prev state: ', store.getState());
    console.log('action: ', action);
    let result = next(action);
    console.log('next state: ', store.getState());
    console.groupEnd();
    return result;
};

const saver = store => next => action => {
    let result = next(action);
    localStorage['progder-storage'] = JSON.stringify(store.getState());
    return result;
};

const initStorage = (initalState={}) => {
    return localStorage['progder-storage'] || initalState;
};

export const storeFactory = (initialState={}) => (
    applyMiddleware(logger, saver)(createStore)(
        combineReducers({
            test,
        }), initStorage(initialState)
    )
);