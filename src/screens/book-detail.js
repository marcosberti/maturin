/**@jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
import { Redirect, useParams, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useCart } from '../context/cart-context';
import { useData } from '../context/data-context';
import {
  Content,
  BookDetails,
  BookActions,
  Button,
  List,
  BookQty,
} from '../components//lib';
import { primary } from '../styles/colors';
import * as mq from '../styles/media-queries';

const BookImages = ({ titulo, imagenes }) => {
  const [index, setIndex] = React.useState(0);

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;

        ${mq.large} {
          display: block;
        }
      `}
    >
      <img
        src={imagenes[index]}
        alt={titulo}
        css={css`
          max-width: 20rem;
          object-fit: contain;
          flex-basis: 25rem;
          box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.125);
          border-radius: 5px;

          ${mq.large} {
            max-width: 25rem;
          }
        `}
        height="400px"
        width="400px"
      />
      <List images>
        {imagenes.map((imagen, i) => (
          <li
            onClick={() => setIndex(i)}
            css={css`
              border: 2px solid ${index === i ? primary[400] : '#fff'};
            `}
            key={imagen}
          >
            <img src={imagen} alt={titulo} height="64px" width="64px" />
          </li>
        ))}
      </List>
    </div>
  );
};

const BookDetail = () => {
  const { id } = useParams();
  const history = useHistory();
  const {
    data: { libros },
  } = useData();
  const { addToCart } = useCart();
  const [cantidad, setCantidad] = React.useState(1);

  const libro = libros.find(({ id: _id }) => _id === id);

  if (!libro) {
    // React.strict provoca un doble mounting en ENV === development
    toast.error('No existe el producto');
    return <Redirect to="/" />;
  }

  return (
    <Content bookDetail>
      <div>
        <BookImages titulo={libro.titulo} imagenes={libro.imagenes} />
        <BookDetails>
          <span>{libro.titulo}</span>
          <span>$ {libro.precio}</span>
          <span>{libro.descripcion}</span>
        </BookDetails>

        <BookActions>
          <BookQty cantidad={cantidad} setCantidad={setCantidad} />
          <Button
            primary
            onClick={(e) => {
              e.preventDefault();
              addToCart(libro.id, cantidad);
              history.push('/cart');
            }}
          >
            Comprar{'  '}(x{cantidad})
          </Button>
          <Button
            secondary
            onClick={(e) => {
              e.preventDefault();
              addToCart(libro.id, cantidad);
            }}
          >
            Agregar al carrito
          </Button>
        </BookActions>
      </div>
      <div
        css={css`
          margin-top: 4rem;
          width: 100%;
          padding: 1rem;
        `}
      >
        {libro.sinopsis}
      </div>
    </Content>
  );
};

export default BookDetail;
