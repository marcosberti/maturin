/**@jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
import { useData } from '../context/data-context';
import { useCart } from '../context/cart-context';
import { List, StyledItem } from '../components/lib';

const Cart = () => {
  const { libros } = useData();
  const { cartItems } = useCart();

  console.log('cart', cartItems);

  return (
    <div
      css={css`
        width: 100%;
        max-width: 1000px;
        margin: 0 auto;
        margin-top: 3rem;
      `}
    >
      <span
        css={css`
          font-size: 2rem;
          font-weight: 500;
          letter-spacing: 2px;
          display: block;
          text-align: center;
        `}
      >
        Items en carrito
      </span>

      <List
        css={css`
          box-shadow: 0px 0px 5px 2px #ccc;
          margin-top: 3rem;
        `}
      >
        {cartItems.map(({ id, cantidad }) => {
          const libro = libros.find(({ id: _id }) => _id === id);
          return (
            <StyledItem
              key={id}
              css={css`
                & > * {
                  display: flex;
                  justify-content: space-between;
                }
              `}
            >
              <span
                css={css`
                  font-size: 1.5em;
                  font-weight: 500;
                `}
              >
                {libro.titulo}
              </span>
              <span>x{cantidad}</span>
              <span
                css={css`
                  font-size: 1.5em;
                  font-weight: 500;
                `}
              >
                ARS {libro.precio}
              </span>
            </StyledItem>
          );
        })}
      </List>
    </div>
  );
};

export default Cart;
