/**@jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
import { Link } from 'react-router-dom';
import { useCart } from '../context/cart-context';
import { useData } from '../context/data-context';
import { useAuth } from '../context/auth-context';
import { Nav, List, NavItem } from './lib';
import {
  HomeIcon,
  CategoriesIcon,
  CartIcon,
  UserIcon,
  LogoutIcon,
  OrdersIcon,
} from '../assets/icons';
import * as mq from '../styles/media-queries';
import { useScreen } from '../hooks';

const NavCategories = ({ isOpen }) => {
  const { isMobile } = useScreen();
  const {
    data: { categorias },
  } = useData();

  return (
    <div
      css={css`
        display: none;
        position: absolute;

        ${isOpen && isMobile
          ? css`
              display: flex;
              flex-direction: column;
              justify-content: center;
              top: 0;
              left: 0;
              height: calc(100vh - 3rem);
              width: 100vw;
              background-color: #fff;
              z-index: 999;
            `
          : null}

        ${mq.large} {
          background-color: #fff;
          color: #000;
          border-radius: 5px;
          left: 50%;
          transform: translateX(-50%);
          margin-top: 1rem;
          box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
        }
      `}
    >
      <ul
        css={css`
          list-style: none;
          & > * {
            color: #aaa;
            border-bottom: 1px solid #ddd;
            :first-of-type {
              border-top: 1px solid #ddd;
            }

            ${mq.large} {
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
            }
            :hover {
              background-color: #5bae7b;
              color: #fff;
            }

            & > a {
              display: block;
              padding: 1rem;
            }
          }
        `}
      >
        {categorias?.map(({ id, category }) => (
          <li key={id}>
            <Link to={`/categories/${id}`}>{category.toUpperCase()}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Navbar = () => {
  const { user, logout } = useAuth();
  const { cartItems } = useCart();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Nav>
      <List navList>
        <NavItem
          text={
            <span>
              Maturin's <br /> Books
            </span>
          }
          navIcon={HomeIcon}
          smallOrder={1}
          to="/"
        />

        <NavItem
          text="Categorias"
          navIcon={CategoriesIcon}
          smallOrder={2}
          onClick={() => setIsOpen(!isOpen)}
          css={css`
            ${mq.large} {
              position: relative;
              cursor: pointer;
              :hover {
                & > button > div {
                  display: block;
                }
              }
            }
          `}
        >
          <NavCategories isOpen={isOpen} />
        </NavItem>
        {user ? (
          <React.Fragment>
            <NavItem
              text="Mis ordenes"
              navIcon={OrdersIcon}
              smallOrder={4}
              to="/orders"
            />
            <NavItem
              text="Cerrar sesion"
              navIcon={LogoutIcon}
              smallOrder={5}
              onClick={(e) => {
                e.preventDefault();
                logout();
              }}
            />
          </React.Fragment>
        ) : (
          <NavItem
            text="Ingresar"
            navIcon={UserIcon}
            smallOrder={5}
            to="/login"
          />
        )}
        <NavItem smallOrder={3} to="/cart">
          <CartIcon size={32} />
          <span>({cartItems.length})</span>
        </NavItem>
      </List>
    </Nav>
  );
};

export default Navbar;
