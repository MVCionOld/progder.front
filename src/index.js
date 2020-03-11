import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import MainRouter from "./routes";
import {Provider} from "react-redux";
import {storeFactory} from "./reducers";


const initialState = {};

export const store = storeFactory(initialState);

const render = () => ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <MainRouter/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

store.subscribe(render);
render();
