import React from 'react';
import BookItem from './book-item';
import { List, ItemNoData } from './lib';

const BookList = ({ libros }) => {
  return (
    <List main>
      {libros.length ? (
        libros.map((libro) => <BookItem key={libro.id} libro={libro} />)
      ) : (
        <ItemNoData />
      )}
    </List>
  );
};

export default BookList;
