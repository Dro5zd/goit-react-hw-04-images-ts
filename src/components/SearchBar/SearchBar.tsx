import React, {ChangeEvent, FormEvent, useState} from 'react';
import {SearchbarHeader, SearchForm, SearchFormButton, SearchFormInput, SearchIcon} from './SearchBar.styled';
import Notiflix from 'notiflix';

interface ISearchBar {
    onSubmitHandler: (inputValue: string) => void
}

export const SearchBar = ({onSubmitHandler}: ISearchBar) => {

    const [inputValue, setInputValue] = useState('')

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (inputValue.trim() === '') {
            return Notiflix.Notify.failure('Sorry, but you didn\'t enter anything. Please try again.');
        }
        onSubmitHandler(inputValue)
        setInputValue('');
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value.toLowerCase())
    };

    return (
        <SearchbarHeader>
            <SearchForm onSubmit={onSubmit}>
                <SearchFormButton type="submit">
                    <SearchIcon/>
                    <span>Search</span>
                </SearchFormButton>
                <SearchFormInput
                    onChange={onChangeHandler}
                    type="text"
                    autoComplete="off"
                    value={inputValue}
                    autoFocus
                    placeholder="Search images and photos"
                />
            </SearchForm>
        </SearchbarHeader>
    );
}


