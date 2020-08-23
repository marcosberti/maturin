/**@jsx jsx */
import { jsx, css } from '@emotion/core';

const Home = ({ greeting }) => {
  return (
    <section
      css={css`
        text-align: center;
        margin-top: 2rem;
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
    </section>
  );
};

export default Home;
