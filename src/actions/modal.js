import { types } from "../types/types"

export const onOpenComicModal = (comic) => {
    return {
        type: types.setModalOnOpen,
        payload: comic
    }
}

export const onCloseComicModal = () => {
    return {
        type: types.setModalOnClose
    }
}