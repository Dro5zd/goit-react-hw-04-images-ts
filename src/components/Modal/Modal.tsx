import React, {MouseEvent} from 'react';
import {ModalDiv, OverlayModal} from './Modal.styled';

interface IModal {
    closeModalOnBackdrop: (e: MouseEvent<HTMLDivElement>) => void,
    bigImg: string,
    tag: string
}

export function Modal({closeModalOnBackdrop, bigImg, tag}: IModal) {
    return <OverlayModal onClick={closeModalOnBackdrop}>
        <ModalDiv>
            <img src={bigImg} alt={tag}/>
        </ModalDiv>
    </OverlayModal>
}