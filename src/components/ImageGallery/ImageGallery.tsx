import React, {useEffect, useRef, useState} from 'react';
import {ImageGalleryList} from './ImageGallery.styled';
import {ImageGalleryItem} from '../ImageGalleryItem/ImageGalleryItem';
import {getImages} from '../../api/fetchImages';
import Notiflix from 'notiflix';
import {Loader} from '../Loader/Loader';
import {Button} from '../Button/Button';

interface IImageGallery {
    searchValue: string,
}

interface IResponse {
    hits: []
    totalHits: number
}

export const ImageGallery = ({searchValue}: IImageGallery) => {

    const [images, setImages] = useState([])
    const [totalHits, setTotalHits] = useState(0)
    const [pageCounter, setPageCounter] = useState(1)
    const [isLoading, setIsLoading] = useState(false)

    const initialRender = useRef(false);

    useEffect(() => {
        if (initialRender.current) {
        setIsLoading(true);
        setPageCounter(1);
        const fetchData = async () => {
            try {
                const response = await getImages(searchValue, pageCounter);
                const {hits, totalHits}: IResponse = response.data;
                if (hits.length === 0) {
                    setImages([]);
                    return Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.');
                }
                Notiflix.Notify.success(`Hooray! We found ${totalHits} images.`);
                setImages(hits)
                setTotalHits(totalHits)
            } catch (e) {
                console.log(e)
            } finally {
                setIsLoading(false);
            }
        }
        fetchData()
        }
        else {
            initialRender.current = true
        }
    }, [searchValue])


    useEffect(() => {
        if (initialRender.current) {
        setIsLoading(true);
        const fetchData = async () => {
            try {
                const response = await getImages(searchValue, pageCounter);
                const {hits, totalHits}:IResponse = response.data;
                setImages([...images, ...hits])
                console.log(totalHits)
                console.log(images.length)
                if (totalHits === images.length) {
                    return Notiflix.Notify.failure(`We're sorry, but you've reached the end of search results.`);
                }

            } catch (e) {
                console.log(e)
            } finally {
                setIsLoading(false);
            }
        }
        fetchData()
        }
        else {
            initialRender.current = true
        }
    }, [pageCounter])

    const loadMoreHandler = () => {
        setPageCounter(pageCounter + 1);
    };

    return (
        <>
            <ImageGalleryList>
                {images.map(({id, webformatURL, largeImageURL, tags}) =>
                    <ImageGalleryItem key={id}
                                      smallImg={webformatURL}
                                      bigImg={largeImageURL}
                                      tag={tags}
                    />)}
            </ImageGalleryList>
            <Loader isLoading={isLoading}/>
            {totalHits !== images.length && <Button loadMoreHandler={loadMoreHandler}/>}
        </>
    );
}
