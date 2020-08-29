/**@jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import * as mq from '../styles/media-queries';
import { useScreen } from '../hooks';

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
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  ${(props) =>
    props.navList
      ? `color: #fff;
      font-weight: 500;
      max-width: 1000px;
      margin: 0 auto;`
      : null};
`;

const StyledItem = ({
  children,
  wrapper: Wrapper = 'div',
  wrapperProps = {},
  ...rest
}) => (
  <li {...rest}>
    <Wrapper
      css={{
        padding: '0.5rem',
        [mq.large]: {
          padding: '1rem',
        },
        ...wrapperProps?.css,
      }}
    >
      {children}
    </Wrapper>
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
    <StyledItem
      css={{
        [mq.small]: {
          order: smallOrder,
        },
      }}
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
    </StyledItem>
  );
};

const buttonVariants = {
  primary: {
    border: 'none',
    backgroundColor: '#5bae7b',
    color: '#fff',
  },
  secondary: {
    border: '1px solid #5bae7b',
    backgroundColor: '#fff',
    color: '#5bae7b',
  },
};

const StyledButton = styled.button`
  border-radius: 5px;
  padding: 0.5rem 1rem;
  max-width: 100px;
  cursor: pointer;
  ${(props) =>
    props.primary ? buttonVariants.primary : buttonVariants.secondary}
`;

export { Nav, List, StyledItem, NavItem, StyledButton };
