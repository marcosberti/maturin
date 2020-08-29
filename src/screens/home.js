/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import ItemList from '../components/itemList';

const Home = ({ greeting }) => {
  return (
    <section
      css={css`
        text-align: center;
        margin: 2rem auto 0;
        max-width: 1000px;
      `}
    >
      <h1>{greeting}</h1>
      <h2
        css={css`
          margin-top: 1rem;
          font-weight: 300;
          font-size: 1em;
        `}
      >
        Libros y merchandasing de Stephen King
      </h2>
      <ItemList />
    </section>
  );
};

export default Home;
