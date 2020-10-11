import React from 'react';
import { Link } from 'react-router-dom';
import { ListItem } from './lib';

const BookItem = ({ libro }) => (
  <ListItem key={libro.id} disabled={!libro.stock}>
    <Link
      to={`/item/${libro.id}`}
      onClick={(e) => {
        if (!libro.stock) {
          e.preventDefault();
          e.stopPropagation();
        }
      }}
    >
      <img src={libro.imagenes[0]} alt={libro.title} height="200px" />
      <div>
        <span>{libro.titulo}</span>
        {libro.stock ? (
          <span>$ {libro.precio}</span>
        ) : (
          <span>No disponible</span>
        )}
      </div>
    </Link>
  </ListItem>
);

export default BookItem;
