/**@jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
import { StyledButton } from './lib';

const Item = ({ libro, agregarItem, eliminarItem }) => (
  <li
    key={libro.id}
    css={css`
      padding: 1rem;
      width: 100%;
      display: flex;
      &:not(:last-of-type) {
        border-bottom: 1px solid #ddd;
      }
      ${!libro.stock ? { opacity: 0.35 } : null}
    `}
  >
    <img
      src={libro.imagenes[0].url}
      alt={libro.title}
      css={css`
        max-width: 150px;
        object-fit: cover;
        flex-basis: 20%;
      `}
    />
    <div
      css={css`
        flex-basis: 60%;
      `}
    >
      <span
        css={css`
          font-weight: 600;
          font-size: 2em;
          display: block;
          text-align: start;
        `}
      >
        {libro.titulo}
        <span
          css={css`
            font-size: 0.7em;
            font-weight: 200;
            margin-left: 0.5rem;
            display: inline-block;
          `}
        >
          ({libro.idioma})
        </span>
      </span>
      <span
        css={css`
          display: inline-block;
          margin-top: 1rem;
          text-align: start;
          max-width: 30rem;
          font-weight: 300;
        `}
      >
        {libro.descripcion}
      </span>
    </div>
    <div
      css={css`
        flex-basis: 20%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      `}
    >
      {libro.stock ? (
        <React.Fragment>
          <span
            css={css`
              font-size: 1.5em;
              font-weight: 600;
            `}
          >
            $ {libro.precio}
          </span>
          <StyledButton
            primary
            css={css`
              font-size: 0.8rem;
              margin-top: 2rem;
            `}
            onClick={agregarItem}
          >
            Agregar al carrito
          </StyledButton>
          <StyledButton
            secondary
            css={css`
              font-size: 0.8rem;
              margin-top: 2rem;
            `}
            onClick={eliminarItem}
          >
            Eliminar del carrito
          </StyledButton>
        </React.Fragment>
      ) : (
        <span
          css={css`
            font-weight: 300;
          `}
        >
          No disponible
        </span>
      )}
    </div>
  </li>
);

export default Item;
