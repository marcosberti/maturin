/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import { Link } from 'react-router-dom';
import { Nav, List, NavItem } from './lib';
import {
  HomeIcon,
  SearchIcon,
  CategoriesIcon,
  CartIcon,
  UserIcon,
} from '../assets/icons';

const Navbar = () => (
  <Nav>
    <List navList>
      <NavItem navIcon={HomeIcon} smallOrder={1}>
        <Link
          to="/"
          css={css`
            text-decoration: none;
            color: inherit;
          `}
        >
          Maturin's <br /> Books
        </Link>
      </NavItem>
      <NavItem navIcon={SearchIcon} smallOrder={2}>
        <input
          css={css`
            height: 1.8em;
          `}
          type="search"
          placeholder="Buscar"
        />
      </NavItem>
      <NavItem
        navIcon={CategoriesIcon}
        smallOrder={4}
        css={{
          position: 'relative',
          cursor: 'pointer',
          ':hover': {
            '& > div > div': {
              display: 'block',
            },
          },
        }}
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
      </NavItem>
      <NavItem
        navIcon={UserIcon}
        smallOrder={5}
        wrapper={'button'}
        wrapperProps={{
          css: {
            border: 'none',
            backgroundColor: 'inherit',
            color: 'inherit',
            fontWeight: 'inherit',
            outline: 'none',
            cursor: 'pointer',
          },
          // onClick: handleLogin,
        }}
      >
        Ingresar
      </NavItem>
      <NavItem smallOrder={3}>
        <Link to="/cart">
          <CartIcon size={32} />
        </Link>
      </NavItem>
    </List>
  </Nav>
);

export default Navbar;
