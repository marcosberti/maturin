/**@jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
import { useScreen } from '../hooks';
import { Nav, List, Item } from './lib';
import {
  HomeIcon,
  SearchIcon,
  CategoriesIcon,
  CartIcon,
  UserIcon,
} from '../assets/icons';
import { small } from '../styles/media-queries';

const Navbar = () => {
  const { isMobile } = useScreen();

  return (
    <Nav>
      <List navList>
        <Home isMobile={isMobile} />
        <Busqueda isMobile={isMobile} />
        <Categorias isMobile={isMobile} />
        <Usuario isMobile={isMobile} />
        <Cart isMobile={isMobile} />
      </List>
    </Nav>
  );
};

const Home = ({ isMobile }) => (
  <Item
    css={{
      [small]: {
        order: 1,
      },
    }}
  >
    {isMobile ? (
      <HomeIcon />
    ) : (
      <React.Fragment>
        Maturin's <br /> Books
      </React.Fragment>
    )}
  </Item>
);

const Busqueda = ({ isMobile }) => (
  <Item
    css={{
      [small]: {
        order: 2,
      },
    }}
  >
    {isMobile ? (
      <SearchIcon />
    ) : (
      <input
        css={css`
          height: 1.8em;
        `}
        type="search"
        placeholder="Buscar"
      />
    )}
  </Item>
);

const Categorias = ({ isMobile }) => (
  <Item
    css={{
      position: 'relative',
      cursor: 'pointer',
      ':hover': {
        '& > div': {
          display: 'block',
        },
      },
      [small]: {
        order: 4,
      },
    }}
  >
    {isMobile ? (
      <CategoriesIcon />
    ) : (
      <React.Fragment>
        Categorias
        <div
          css={css`
            position: absolute;
            display: none;
            background-color: #fff;
            color: #000;
            border-radius: 5px;
            left: 50%;
            transform: translateX(-50%);
            margin-top: 1rem;
            box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
          `}
        >
          <ul
            css={css`
              list-style: none;
              & > * {
                padding: 1rem;
                color: #aaa;
                font-size: 0.8em;
                font-weight: 300;
                transition: background-color 0.25s ease, color 0.25s ease;
                :not(:last-child) {
                  border-bottom: 1px solid #ddd;
                }
                :first-of-type {
                  border-top-left-radius: 5px;
                  border-top-right-radius: 5px;
                }
                :last-child {
                  border-bottom-left-radius: 5px;
                  border-bottom-right-radius: 5px;
                }
                :hover {
                  background-color: #5bae7b;
                  color: #fff;
                }
              }
            `}
          >
            <li>Castellano</li>
            <li>Ingles</li>
            <li>Action Figures</li>
            <li>Comics</li>
            <li>Merchandasing</li>
          </ul>
        </div>
      </React.Fragment>
    )}
  </Item>
);

const Usuario = ({ isMobile }) => {
  const [usuario, setUsuario] = React.useState(null);

  const handleLogin = () => {
    setUsuario('marcos bertilotti');
  };

  return (
    <li
      css={{
        [small]: {
          order: 5,
          padding: '0.5rem',
        },
      }}
    >
      {isMobile ? (
        <UserIcon />
      ) : (
        usuario || (
          <button
            css={css`
              padding: 1rem 0;
              border: none;
              background-color: inherit;
              color: inherit;
              font-weight: inherit;
              outline: none;
              cursor: pointer;
            `}
            onClick={handleLogin}
          >
            Ingresar
          </button>
        )
      )}
    </li>
  );
};

const Cart = ({ isMobile }) => (
  <Item
    css={{
      [small]: {
        order: 3,
      },
    }}
  >
    <CartIcon size={isMobile ? 32 : 24} />
  </Item>
);

export default Navbar;
