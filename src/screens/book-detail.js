/**@jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
import { useParams, useHistory } from 'react-router-dom';
import { useCart } from '../context/cart-context';
import { Button } from '../components//lib';
// import { AddIcon } from '../assets/icons/';
import { neutral } from '../styles/colors';
import { useData } from '../context/data-context';

const BookDetail = ({ agregarItem }) => {
  const { id } = useParams();
  const history = useHistory();
  const { libros, loading } = useData();
  const { addToCart } = useCart();
  const [cantidad, setCantidad] = React.useState(0);

  const libro = libros.find(({ id: _id }) => _id === id);
  console.log('libro', libro);

  if (loading) {
    return (
      <div
        css={css`
          padding-top: 5rem;
          width: 12rem;
          margin: 0 auto;
          text-align: center;
          letter-spacing: 2px;
          font-weight: 500;
        `}
      >
        Cargando datos
      </div>
    );
  }

  return (
    <div
      css={css`
        padding: 3rem 5rem;
      `}
    >
      <div
        css={css`
          display: flex;
        `}
      >
        <img
          src={libro.imagenes[0]}
          alt={libro.titulo}
          css={css`
            max-width: 25rem;
            object-fit: contain;
            flex-basis: 25rem;
          `}
        />
        <div
          css={css`
            text-align: start;
            padding-top: 1rem;
            flex-basis: 100%;
          `}
        >
          <span
            css={css`
              font-size: 6rem;
              font-weight: 600;
              display: inline-block;
            `}
          >
            {libro.titulo}
          </span>
          <span
            css={css`
              color: ${neutral[400]};
              font-weight: 500;
              font-size: 1.4em;
            `}
          >
            ({libro.idioma.toUpperCase()})
          </span>
          <span
            css={css`
              display: block;
              color: ${neutral[500]};
            `}
          >
            {libro.descripcion}
          </span>
          <span
            css={css`
              display: inline-block;
              margin-top: 1rem;
              font-weight: 600;
              font-size: 1.5em;
            `}
          >
            ARS {libro.precio}
          </span>

          <div
            css={css`
              width: 100%;
              margin-top: 2rem;
              display: flex;
              justify-content: space-between;
              align-items: center;
            `}
          >
            <Button
              secondary
              css={css`
                flex-basis: 10%;
                height: 3rem;
              `}
              onClick={(e) => {
                e.preventDefault();
                setCantidad(cantidad ? cantidad - 1 : cantidad);
              }}
            >
              -
            </Button>
            <span
              css={css`
                flex-basis: 10%;
                text-align: center;
                height: 1rem;
                outline: none;
                border: none;
                height: 3rem;
                -moz-appearance: textfield;
                &::-webkit-outer-spin-button,
                &::-webkit-inner-spin-button {
                  -webkit-appearance: none;
                  margin: 0;
                }
              `}
            >
              {cantidad}
            </span>
            <Button
              secondary
              css={css`
                flex-basis: 10%;
                height: 3rem;
              `}
              onClick={(e) => {
                e.preventDefault();
                setCantidad(cantidad + 1);
              }}
            >
              +{/* <AddIcon fill={neutral[600]} /> */}
            </Button>
            <Button
              secondary
              css={css`
                flex-basis: 60%;
                height: 3em;
              `}
              onClick={(e) => {
                e.preventDefault();
                addToCart(libro);
              }}
            >
              Agregar al carrito
            </Button>
          </div>
          <Button
            primary
            css={css`
              width: 100%;
              height: 3rem;
              margin-top: 2rem;
            `}
            onClick={(e) => {
              e.preventDefault();
              addToCart(libro);
              history.push('/cart');
            }}
          >
            Comprar
          </Button>
        </div>
      </div>
      <div
        css={css`
          margin-top: 4rem;
          width: 100%;
        `}
      >
        {libro.sinopsis}
      </div>
    </div>
  );
};

export default BookDetail;
