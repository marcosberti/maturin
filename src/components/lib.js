import styled from '@emotion/styled';
import * as mq from '../styles/media-queries';

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
  ${(props) =>
    props.navList
      ? `color: #fff;
      font-weight: 500;
      max-width: 1000px;
      margin: 0 auto;`
      : null};
`;

const Item = styled.li`
  padding: 0.5rem;
  ${mq.medium} {
    padding: 1rem;
  }
`;

export { Nav, List, Item };
