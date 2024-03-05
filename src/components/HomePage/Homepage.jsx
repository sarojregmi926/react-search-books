import React from 'react'
import BookList from '../BookList/BookList';
import SearchBar from '../SearchBar/SearchBar';

const Homepage = () => {
    return (
        <>
            <SearchBar />
            <BookList />
        </>
    )
}

export default Homepage;