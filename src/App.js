/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import { BrowserRouter as Router } from 'react-router-dom';
import * as mq from './styles/media-queries';
import GlobalStyles from './globalStyles';
import Navbar from './components/navbar';
import AppRoutes from './app-routes';

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
    <Router>
      <Navbar />
      <AppRoutes />
    </Router>
  </div>
);

export default App;
