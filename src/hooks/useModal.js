import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { onCloseComicModal, onOpenComicModal } from '../actions/modal'

export const useModal = (comic) => {
    const dispatch = useDispatch()

    const openComicModal = () => {
        dispatch(onOpenComicModal(comic));
    }


    const closeComicModal = () => {
        dispatch(onCloseComicModal())
    }
    return {
        openComicModal,
        closeComicModal,
    }
}
