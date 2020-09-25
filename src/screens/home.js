/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import BookList from '../components/book-list';

const Home = ({ greeting }) => {
  return (
    <section
      css={css`
        text-align: center;
        margin: 2rem auto 0;
        max-width: 1000px;
        width: 100%;
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
      <BookList />
    </section>
  );
};

export default Home;
