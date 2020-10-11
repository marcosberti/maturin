/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { useScreen } from '../hooks';
import { neutral } from '../styles/colors';
import * as mq from '../styles/media-queries';
import { Loader } from '../assets/icons/index';

const Nav = styled.nav`
  background: #5bae7b;
  background: linear-gradient(to bottom, #72b88d 0%, #5bae7b 100%);
  ${mq.small} {
    order: 2;
  }
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 5px;

  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  ${(props) =>
    props.navList
      ? css`
          color: #fff;
          font-weight: 500;
          max-width: 1000px;
          margin: 0 auto;
        `
      : props.main
      ? css`
          width: 100%;
          flex-flow: row wrap;
          justify-content: flex-start;
          box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.125);
          border-radius: 5px;

          ${mq.large} {
            margin-left: 1rem;
            box-shadow: none;
            margin-left: 2rem;
            & > * {
              margin-right: 2rem;
            }
          }
        `
      : props.images
      ? css`
          margin-top: 1rem;
          justify-content: flex-start;
          & > * {
            margin-right: 1rem;
            box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.125);
            cursor: pointer;
            border-radius: 5px;

            & > * {
              max-width: 4rem;
              object-fit: contain;
            }
          }
        `
      : null};
`;

const ListItem = styled.li`
  flex-basis: 100%;
  border-bottom: 1px solid #ccc;

  ${mq.large} {
    border-radius: 5px;
    border-bottom: none;
    box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.125);
    margin-bottom: 2rem;
    flex-basis: 30%;
  }
  & > a {
    padding: 1rem;
    display: flex;
    align-items: center;

    ${mq.large} {
      width: 100%;
      display: block;
      cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
    }

    & > img {
      max-width: 150px;
      object-fit: cover;
      flex-basis: 30% ${mq.large} {
        max-width: 200px;
      }
    }

    & > div {
      flex-basis: 70%;
      text-align: center;
      opacity: ${(props) => (props.disabled ? 0.5 : 1)};

      ${mq.large} {
        border-top: 1px solid #ddd;
        padding-top: 0.5rem;
      }

      & > span:nth-of-type(1) {
        font-weight: 600;
        font-size: 2em;
        display: block;
      }

      & > span:nth-of-type(2) {
        font-weight: 500;
        display: block;
        width: 100%;
        margin-top: 1rem;
        color: #555;

        ${mq.large} {
          font-size: 1.25em;
        }
      }
    }
  }
`;

const Item = ({ children, onClick, to, ...rest }) => {
  const Wrapper = onClick ? 'button' : to ? Link : 'div';

  return (
    <li
      css={css`
        width: 100%;
        text-align: center;
      `}
      {...rest}
    >
      <Wrapper
        css={css`
          padding: 0.5rem;
          ${mq.large} {
            padding: 1rem;
          }
        `}
        onClick={onClick ? onClick : () => {}}
        to={to}
      >
        {children}
      </Wrapper>
    </li>
  );
};

const ItemNoData = (props) => (
  <li
    css={css`
      width: 100%;
      padding: 1rem;
    `}
    {...props}
  >
    Sin datos
  </li>
);

const NavItem = ({
  navIcon: NavIcon,
  children,
  smallOrder,
  iconSize = 24,
  ...rest
}) => {
  const { isMobile } = useScreen();

  return (
    <Item
      css={css`
        ${mq.small} {
          order: ${smallOrder};
        }
      `}
      {...rest}
    >
      {children ? (
        isMobile ? (
          <NavIcon />
        ) : (
          children
        )
      ) : (
        <NavIcon {...(isMobile ? { size: iconSize } : null)} />
      )}
    </Item>
  );
};

const buttonVariants = {
  primary: {
    border: '1px solid #5bae7b',
    backgroundColor: '#5bae7b',
    color: '#fff',
  },
  secondary: {
    border: '1px solid #5bae7b',
    backgroundColor: '#fff',
    color: '#5bae7b',
  },
};

const Button = styled.button`
  border-radius: 5px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  ${(props) =>
    props.primary
      ? buttonVariants.primary
      : props.secondary
      ? buttonVariants.secondary
      : props.none
      ? null
      : buttonVariants.primary}
`;

const FullPageLoading = () => (
  <div
    css={css`
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      flex-flow: column;
      align-items: center;
    `}
  >
    <Loader fill="#72b88d" size={120} />
    <span
      css={css`
        margin-top: 2rem;
        display: block;
        text-align: center;
        color: ${neutral[500]};
        text-transform: uppercase;
        font-weight: 600;
        letter-spacing: 1px;
        font-family: 'Poppins', sans-serif;
      `}
    >
      Cargando datos
    </span>
  </div>
);

const Content = styled.section`
  padding: 3rem 1rem;
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  height: calc(100vh - 3rem);
  margin: 0 auto;

  ${mq.large} {
    padding: 3rem 5rem;
    height: 100%;
    max-width: 1400px;
  }

  ${(props) =>
    props.home
      ? css`
          ${'' /* padding: 0; */}
          text-align: center;

          & > h2 {
            margin-top: 1rem;
            font-weight: 300;
            font-size: 1em;
          }

          & > h3 {
            margin: 5rem 0 2.5rem;
            text-align: start;
            text-transform: uppercase;
            font-size: 1.25rem;
          }
        `
      : props.bookDetail
      ? css`
          padding: 3rem 0;
          & > div:nth-of-type(1) {
            display: grid;
            grid-template-rows: auto;
            grid-template-columns: auto;
            grid-template-areas:
              'images'
              'details'
              'actions';

            & > div:nth-of-type(1) {
              grid-area: images;
            }

            & > div:nth-of-type(2) {
              grid-area: details;
            }

            & > div:nth-of-type(3) {
              grid-area: actions;
            }

            ${mq.large} {
              grid-template-rows: auto 1fr;
              grid-template-columns: auto 1fr;
              grid-template-areas:
                'images details'
                'images actions';

              & > div:nth-of-type(2) {
                grid-area: details;
                margin-left: 2rem;
                margin-top: 0;
              }
            }
          }
        `
      : null}
`;

const BookDetails = styled.div`
  margin-top: 2rem;
  padding: 1rem 2rem 2rem 2rem;
  text-align: start;
  border-radius: 5px;

  ${mq.large} {
    box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.125);
  }

  & > * {
    display: block;
  }

  & > :nth-of-type(1) {
    font-size: 4rem;
    font-weight: 600;
    display: inline-block;
  }

  & > :nth-of-type(2) {
    font-weight: 600;
    font-size: 1.5em;
  }
  & > :nth-of-type(3) {
    color: ${neutral[500]};
  }

  & > :not(:nth-of-type(1)) {
    margin-top: 1rem;
  }
`;

const BookActions = styled.div`
  /* padding: 2rem; */

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 1rem;

  & > * {
    margin-top: 1rem;
  }

  ${mq.large} {
    margin-top: 2rem;
    & > * {
      margin-top: 0;
    }
  }

  & > button {
    height: 3.5em;
    flex-basis: 100%;
  }

  & > button:nth-of-type(1) {
    ${mq.large} {
      margin-left: 1rem;
      flex-basis: 40%;
    }
  }
`;

const Quantity = styled.div`
  width: 100%;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.125);
  display: grid;
  grid-template-columns: calc(100% - 2rem) 2rem;
  grid-auto-rows: 1.75rem 1.75rem;
  grid-template-areas:
    'input add'
    'input substrac';

  ${mq.large} {
    grid-template-columns: 6rem 2rem;
    width: 8rem;
  }

  & > input {
    grid-area: input;
  }
  & > button:nth-of-type(1) {
    grid-area: add;
  }
  & > button:nth-of-type(2) {
    grid-area: substrac;
  }
`;

const BookQty = ({ cantidad, setCantidad }) => (
  <Quantity>
    <input
      type="number"
      min="0"
      css={css`
        text-align: center;
        outline: none;
        border: none;
        border-radius: 5px;

        -moz-appearance: textfield;
        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
      `}
      value={cantidad}
      onChange={(e) => setCantidad(Number(e.target.value))}
    />
    <Button
      none
      css={css`
        border: 1px solid #ccc;
        padding: 0;
        border-radius: 0px;
        border-top-right-radius: 5px;
      `}
      onClick={(e) => {
        e.preventDefault();
        setCantidad(cantidad + 1);
      }}
    >
      +
    </Button>
    <Button
      none
      css={css`
        border: 1px solid #ccc;
        padding: 0;
        border-radius: 0px;
        border-bottom-right-radius: 5px;
      `}
      onClick={(e) => {
        e.preventDefault();
        setCantidad(cantidad ? cantidad - 1 : cantidad);
      }}
    >
      -
    </Button>
  </Quantity>
);

export {
  Nav,
  List,
  Item,
  ListItem,
  ItemNoData,
  NavItem,
  Button,
  FullPageLoading,
  Content,
  BookDetails,
  BookActions,
  BookQty,
};
