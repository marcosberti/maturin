/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import * as mq from './styles/media-queries';
import GlobalStyles from './globalStyles';
import Home from './screens/home';
import Navbar from './components/navbar';

const App = () => (
  <div
    css={css`
      height: 100vh;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr auto;
      ${mq.large} {
        grid-template-rows: auto 1fr;
      }
    `}
  >
    <GlobalStyles />
    <Navbar />
    <Home greeting="Bienvenidos a Maturin's Books " />
  </div>
);

export default App;
