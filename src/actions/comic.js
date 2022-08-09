import { types } from "../types/types"

export const setComic = () => {
    return {
        type: types.setComic
    }
}

export const setComicSuccess = (comic) => {
    return {
        type: types.setComicSuccess,
        payload: comic
    }
}

export const setComicError = () => {
    return {
        type: types.setComicError
    }
}

export const setCharacters = (character) => {
    console.log(character)
    return {
        type: types.setCharacters,
        payload: character,
    }
}

export const setTeams = (teams) => {
    return {
        type: types.setTeams,
        payload: teams
    }
}

export const setLocations = (locations) => {
    return {
        type: types.setLocations,
        payload: locations
    }
}

export const setConcepts = (concepts) => {
    return {
        type: types.setConcepts,
        payload: concepts,
    }
}