import './App.css';
import {ImageGallery} from './components/ImageGallery/ImageGallery';
import {SearchBar} from './components/SearchBar/SearchBar';
import {useState} from 'react';

export const App = () => {

  const[searchValue, setSearchValue] = useState('')
    const [pageCounter, setPageCounter] = useState(1)

  const onSubmitHandler = (value: string) => {
    setSearchValue(value);
    setPageCounter(1)
  };

  return (
    <section>
      <SearchBar onSubmitHandler={onSubmitHandler}/>
      <ImageGallery searchValue={searchValue} pageCounter={pageCounter} setPageCounter={setPageCounter}/>
    </section>
  );
};

