/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import { BrowserRouter as Router } from 'react-router-dom';
import * as mq from './styles/media-queries';
import GlobalStyles from './globalStyles';
import Navbar from './components/navbar';
import AppRoutes from './app-routes';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const App = () => (
  <div
    css={css`
      /* height: 100%; */
      overflow: hidden;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: auto 3rem;
      grid-template-areas:
        'section'
        'nav';

      & > section {
        grid-area: section;
      }

      & > nav {
        grid-area: nav;
      }

      ${mq.large} {
        grid-template-rows: auto 1fr;
        grid-template-areas:
          'nav'
          'section';
      }
    `}
  >
    <ToastContainer
      position={toast.POSITION.TOP_RIGHT}
      autoClose={2500}
      hideProgressBar={false}
      closeOnClick={true}
      pauseOnHover={true}
      draggable={true}
      progress={undefined}
    />
    <GlobalStyles />
    <Router>
      <Navbar />
      <AppRoutes />
    </Router>
  </div>
);

export default App;
