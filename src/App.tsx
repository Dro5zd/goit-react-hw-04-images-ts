import './App.css';
import {ImageGallery} from './components/ImageGallery/ImageGallery';
import {SearchBar} from './components/SearchBar/SearchBar';
import {useState} from 'react';

export const App = () => {

  const[searchValue, setSearchValue] = useState('')

  const onSubmitHandler = (value: string) => {
    setSearchValue(value);
  };

  return (
    <section>
      <SearchBar onSubmitHandler={onSubmitHandler}/>
      <ImageGallery searchValue={searchValue}/>
    </section>
  );
};

