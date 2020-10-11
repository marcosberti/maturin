/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import { Link } from 'react-router-dom';
import { useCart } from '../context/cart-context';
import { useData } from '../context/data-context';
import { Nav, List, NavItem } from './lib';
import {
  HomeIcon,
  SearchIcon,
  CategoriesIcon,
  CartIcon,
  UserIcon,
} from '../assets/icons';

const NavCategories = () => {
  const {
    data: { categorias },
  } = useData();

  return (
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
  const { cartItems } = useCart();

  return (
    <Nav>
      <List navList>
        <NavItem navIcon={HomeIcon} smallOrder={1} to="/">
          Maturin's <br /> Books
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
          <NavCategories />
        </NavItem>
        <NavItem
          navIcon={UserIcon}
          smallOrder={5}
          onClick={(e) => {
            console.error('handle login');
          }}
        >
          Ingresar
        </NavItem>
        <NavItem navIcon={CartIcon} smallOrder={3} to="/cart">
          <CartIcon size={32} />
          <span>({cartItems.length})</span>
        </NavItem>
      </List>
    </Nav>
  );
};

export default Navbar;
