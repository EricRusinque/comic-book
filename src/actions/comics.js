import { types } from "../types/types"


export const gridList = ( value ) => {
    return {
        type: types.gridList,
        payload: value
    }
}

export const setComics = () => {
    return {
        type: types.setComics
    }
}

export const setComicsSuccess = (comics) => {
    return {
        type: types.setComicsSuccess,
        payload: comics
    }
}

