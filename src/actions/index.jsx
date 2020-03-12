import {SHOW_POPUP, HIDE_POPUP} from "../constants";


export const hidePopup = cardType => ({
    type: HIDE_POPUP,
    payload: {
        cardType: cardType,
        blur: false
    }
});

export const showPopup = cardType => ({
    type: SHOW_POPUP,
    payload: {
        cardType: cardType,
        blur: true
    }
});