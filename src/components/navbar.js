/**@jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
import { CartIcon } from '../assets/icons';

const Navbar = () => {
  return (
    <nav
      css={css`
        background: #5bae7b;
        background: linear-gradient(
          135deg,
          #5bae7b 0%,
          #5bae7b 17%,
          #73de9c 64%,
          #76de9d 66%,
          #a3d6b6 100%
        );
      `}
    >
      <ul
        css={css`
          list-style: none;
          display: flex;
          justify-content: space-around;
          align-items: center;
          color: #fff;
          font-weight: 500;
          max-width: 1000px;
          margin: 0 auto;
          & > li:not(:nth-of-type(4)) {
            padding: 1rem 0;
          }
        `}
      >
        <li>
          Maturin's <br /> Books
        </li>
        <li>
          <input type="text" placeholder="Buscar" />
        </li>
        <li
          css={css`
            position: relative;
            cursor: pointer;
            :hover {
              & > div {
                display: block;
              }
            }
          `}
        >
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
        </li>
        <li>
          <Usuario />
        </li>
        <li>
          <CartIcon />
        </li>
      </ul>
    </nav>
  );
};

const Usuario = () => {
  const [usuario, setUsuario] = React.useState(null);

  const handleLogin = () => {
    setUsuario('marcos bertilotti');
  };

  return (
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
  );
};

export default Navbar;
