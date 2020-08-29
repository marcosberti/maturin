/**@jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
import { useData } from '../context/data-context';
import { List } from './lib';
import Item from './item';

const ItemList = () => {
  const [itemsCarrito, setItemsCarrito] = React.useState(0);
  const libros = useData();

  const agregarItem = () => setItemsCarrito(itemsCarrito + 1);
  const eliminarItem = () => setItemsCarrito(itemsCarrito - 1);

  return (
    <React.Fragment>
      <div
        css={css`
          margin-top: 2rem;
        `}
      >
        Items en carrito: {itemsCarrito}
      </div>
      <List
        column
        css={css`
          width: 100%;
          margin-top: 5rem;
          box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.125);
        `}
      >
        {libros.length ? (
          libros.map((libro) => (
            <Item
              key={libro.id}
              libro={libro}
              agregarItem={agregarItem}
              eliminarItem={eliminarItem}
            />
          ))
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
    </React.Fragment>
  );
};

export default ItemList;
