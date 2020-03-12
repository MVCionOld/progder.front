import {SHOW_POPUP, HIDE_POPUP} from "../constants";


export const hidePopup = data => ({
    type: HIDE_POPUP,
    payload: {
        data: data,
        blur: false
    }
});

export const showPopup = data => ({
    type: SHOW_POPUP,
    payload: {
        data: data,
        blur: true
    }
});