import React, {useState} from 'react';
import {MouseEvent} from 'react';
import {ImageGalleryLi} from './ImageGalleryItem.styled';
import {Modal} from '../Modal/Modal';

interface IImageGalleryItem {
  smallImg: string,
  bigImg: string,
  tag: string
}

export const ImageGalleryItem = ({smallImg, bigImg, tag}: IImageGalleryItem) => {

  const[showModal, setShowModal] = useState(false)

    const toggleModal = () => {
      setShowModal(!showModal);
    };

    const closeModalOnBackdrop = (e: MouseEvent<HTMLDivElement>) => {
        if (e.currentTarget === e.target) {
          setShowModal(!showModal);
        }
    };

    return (
        <>
            <ImageGalleryLi>
                <img src={smallImg} alt={tag} onClick={toggleModal}/>
            </ImageGalleryLi>
            {showModal && <Modal
              showModal={toggleModal}
              closeModalOnBackdrop={closeModalOnBackdrop}
              bigImg={bigImg}
              tag={tag}
            />}
        </>
    );
}
