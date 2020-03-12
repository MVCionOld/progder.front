import {HIDE_POPUP, SHOW_POPUP} from "../constants";


const initialState = {
    cardType: "unknown",
    blur: false
};

const popupReducer = (state = initialState, action) => {
    switch (action.type) {
        case HIDE_POPUP:
            return {...state, ...action.payload};
        case SHOW_POPUP:
            return {...state, ...action.payload};
        default:
            return state;
    }
};

export default popupReducer;