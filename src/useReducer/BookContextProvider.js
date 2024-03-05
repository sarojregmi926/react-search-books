import React, { useEffect, useReducer } from 'react';
import BookContext from '../context/BookContext';

export const actionTypes = {
  FETCH_BOOK_DATA_SUCCESS: 'FETCH_BOOK_DATA_SUCCESS',
  FETCH_BOOK_DATA_ERROR: 'FETCH_BOOK_DATA_ERROR',
  SEARCH_BOOK_DATA: "SEARCH_BOOK_DATA"
}

// Define your initial state, reducer function, and init function
const initialState = {
  books: [],
  loading: true,
  error: null
}

const bookReducer = (state, action) => {
  // reducer logic here
  switch (action.type) {
    case actionTypes.FETCH_BOOK_DATA_SUCCESS:
      return {
        ...state,
        books: action.payload,
        loading: false,
        error: null
      };
    case actionTypes.FETCH_BOOK_DATA_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
      case actionTypes.SEARCH_BOOK_DATA: 
      console.log("return 11111");
      return {
        ...state,
        books: state.books.filter(book => book.title.toLowerCase().includes(action.payload.toLowerCase())),
        loading: false,
      }
    // Add more cases for other actions if needed
    default:
      return state;
  }
};

const BookContextProvider = ({ children }) => {

  const [bookState, dispatch] = useReducer(bookReducer, initialState);

  const fetchBookData = async () => {
    try {
      // Fetch book data from your API or any source
      const response = await fetch("https://freetestapi.com/api/v1/books");;
      const data = await response.json();
      // Dispatch action to update state with fetched data
      dispatch({ type: actionTypes.FETCH_BOOK_DATA_SUCCESS, payload: data });
    } catch (error) {
      // Handle error if fetching fails
      dispatch({ type: actionTypes.FETCH_BOOK_DATA_ERROR, payload: error });
      console.log("error message", error);
    }
  }

  useEffect(() => {
    fetchBookData();
  }, []);

  const data = {
    bookState: bookState
  }
  return (
    <BookContext.Provider value={{ bookState, dispatch }}>
      {children}
    </BookContext.Provider>
  )
}

export default BookContextProvider;

// ** Do state management inside useReducer
