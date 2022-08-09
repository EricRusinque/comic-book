import { types } from "../types/types";

const initialState = {
    grid: true,
    comics: [],
    loading: false
}

export const comicsReducer = ( state = initialState, action) => {
    switch (action.type) {
        case types.setComics: 
            return {
                ...state,
                loading: true,
            }
        case types.setComicsSuccess:
            return {
                ...state,
                comics: action.payload,
                loading: false,
            }
        case types.gridList:
            return {
                ...state,
                grid: action.payload
            }
        default:
            return state;
    }
}