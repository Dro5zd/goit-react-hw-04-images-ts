import React, {MouseEvent} from 'react';
import {ModalDiv, OverlayModal} from './Modal.styled';
import {createPortal} from 'react-dom';

const modalRoot = document.querySelector('#modal-root')

interface IModal {
  closeModalOnBackdrop: (e: MouseEvent<HTMLDivElement>)=>void,
  bigImg: string,
  tag: string
}

export function Modal({closeModalOnBackdrop, bigImg, tag}: IModal) {
  return createPortal(
      <OverlayModal onClick={closeModalOnBackdrop}>
        <ModalDiv>
          <img src={bigImg} alt={tag}/>
        </ModalDiv>
      </OverlayModal>,
  // @ts-ignore
      modalRoot,
  );
}