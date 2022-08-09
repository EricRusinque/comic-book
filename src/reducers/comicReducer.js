import { types } from "../types/types";

export const initialState = {
    loading: false,
    hasErrors: false,
    comic: [],
    characters: [],
    teams:[],
    locations:[],
    concepts:[]
}

export const comicReducer = ( state = initialState, action) => {
    switch (action.type) {
        case types.setComic: 
            return {
                ...state,
                loading: true,
            }
        case types.setComicSuccess:
            return {
                ...state,
                comic: action.payload,
                loading: false,
            }
        case types.setCharacters:
            return {
                ...state,
                characters: action.payload
            }
        case types.setTeams:
            return {
                ...state,
                teams: action.payload
            }
        case types.setLocations:
            return {
                ...state,
                locations: action.payload
            }
        case types.setConcepts:
            return {
                ...state,
                concepts: action.payload
            }
        default:
            return state;
    }
}