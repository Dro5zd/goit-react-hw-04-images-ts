import {Bars} from 'react-loader-spinner';

import React from 'react';
import {LoaderWrapper} from './Loader.styled';

interface ILoader {
    isLoading: boolean
}

export const Loader = ({isLoading}: ILoader) => {
    return (
        <LoaderWrapper disable={isLoading}>
            <Bars
                height="80"
                width="80"
                color="rgba(48, 21, 77)"
                ariaLabel="bars-loading"
                visible={isLoading}
            />
        </LoaderWrapper>
    );
};





