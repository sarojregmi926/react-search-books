import React, { useContext } from 'react';
import "./BookList.css";
import BookContext from '../../context/BookContext';


const BookList = () => {
  const { bookState, dispatch } = useContext(BookContext);
  console.log("bookstgate", bookState);
  return (
    <div className='book-list'>
      <h2>Book List</h2>
      <ul>
        {bookState.books.map(book =>
          <li key={book.id}>
            <article className='book'>
              <img src={book.cover_image} alt={book.title} />
              <h3>{book.title}</h3>
              <p>{book.author}</p>
              <p>{book.publication_year}</p>
              <p>{book.genre[0]}</p>
            </article>
          </li>
        )}
      </ul>
    </div>
  )
}

export default BookList