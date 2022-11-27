import React from 'react';
import {LoadMoreButton} from './Button.styled';

export interface IButton {
    loadMoreHandler: () => void
}

export const Button = ({loadMoreHandler}: IButton) => {
    return (
        <LoadMoreButton onClick={loadMoreHandler}>
            Load more
        </LoadMoreButton>
    );
};