import { types } from "../types/types";

const initialState = {
    modalOpen: false,
    comic: []
}

export const modalReducer = ( state = initialState, action) => {
    switch (action.type) {
        case types.setModalOnOpen:
            return {
                ...state,
                modalOpen: true,
                comic: action.payload

            }
        case types.setModalOnClose:
            return {
                ...state,
                modalOpen:false,
                comic: action.payload            }
        default:
            return state;
    }
}