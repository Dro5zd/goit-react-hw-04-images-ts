import React, {MouseEvent, useEffect} from 'react';
import {ModalDiv, OverlayModal} from './Modal.styled';

interface IModal {
    showModal: (value: boolean) => void,
    closeModalOnBackdrop: (e: MouseEvent<HTMLDivElement>) => void,
    bigImg: string,
    tag: string
}

export function Modal({showModal, closeModalOnBackdrop, bigImg, tag}: IModal) {
    const escHandler = (e: any) => {
        if (e.key === "Escape") {
            showModal(false)
        }
    }

    useEffect(() => {
        document.addEventListener("keydown", escHandler);
        return () => {
            document.removeEventListener("keydown", escHandler);
        };
    }, []);

    return <OverlayModal onClick={closeModalOnBackdrop}>
        <ModalDiv>
            <img src={bigImg} alt={tag}/>
        </ModalDiv>
    </OverlayModal>
}