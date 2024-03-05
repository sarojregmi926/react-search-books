import React, { useContext, useEffect, useState } from 'react';
import "./SearchBar.css";
import BookContext from '../../context/BookContext';
import { actionTypes } from '../../useReducer/BookContextProvider';

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const { dispatch } = useContext(BookContext);

  useEffect(() => {
    dispatch({ type: actionTypes.SEARCH_BOOK_DATA, payload: searchText });
    console.log('tst-----------------------------***************', searchText);
  }, [searchText, dispatch]);

  const handleInput = (event) => {
    const { name, value } = event.target;
    setSearchText(value);
    console.log('tst-----------------------------', searchText);
  }

  return (
    <div>SearchBar
      <input value={searchText} name='inputText' onChange={handleInput} />
    </div>
  )
}

export default SearchBar;