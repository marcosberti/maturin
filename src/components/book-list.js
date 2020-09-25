/**@jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
import { useData } from '../context/data-context';
import { useCart } from '../context/cart-context';
import { List } from './lib';
import BookItem from './book-item';

const BookList = () => {
  const { libros, loading } = useData();
  const { cartItems } = useCart();

  return (
    <React.Fragment>
      <div
        css={css`
          margin-top: 2rem;
        `}
      >
        Items en carrito: {cartItems.length}
      </div>
      {loading ? (
        <span
          css={css`
            display: block;
            margin-top: 5rem;
            letter-spacing: 2px;
            font-weight: 600;
            padding: 1.5rem;
            box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.125);
          `}
        >
          Cargando datos
        </span>
      ) : (
        <List
          column
          css={css`
            width: 100%;
            margin-top: 5rem;
            box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.125);
          `}
        >
          {libros.length ? (
            libros.map((libro) => <BookItem key={libro.id} libro={libro} />)
          ) : (
            <li
              css={css`
                width: 100%;
                padding: 1rem;
              `}
            >
              Sin datos
            </li>
          )}
        </List>
      )}
    </React.Fragment>
  );
};

export default BookList;
