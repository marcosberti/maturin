/**@jsx jsx */
import { Global, css, jsx } from '@emotion/core';
import emotionNormalize from 'emotion-normalize';
import thin from './assets/fonts/Poppins-Thin.ttf';
import extraLight from './assets/fonts/Poppins-ExtraLight.ttf';
import light from './assets/fonts/Poppins-Light.ttf';
import regular from './assets/fonts/Poppins-Regular.ttf';
import medium from './assets/fonts/Poppins-Medium.ttf';
import semiBold from './assets/fonts/Poppins-SemiBold.ttf';
import bold from './assets/fonts/Poppins-Bold.ttf';
import extraBold from './assets/fonts/Poppins-ExtraBold.ttf';
import black from './assets/fonts/Poppins-Black.ttf';

const fonts = {
  thin: { url: thin, weight: 100 },
  extraLight: { url: extraLight, weight: 200 },
  light: { url: light, weight: 300 },
  regular: { url: regular, weight: 400 },
  medium: { url: medium, weight: 500 },
  semiBold: { url: semiBold, weight: 600 },
  bold: { url: bold, weight: 700 },
  extraBold: { url: extraBold, weight: 800 },
  black: { url: black, weight: 900 },
};

const GlobalStyles = () => (
  <Global
    styles={css`
      ${emotionNormalize}
      @font-face {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: ${fonts.thin.weight};
        src: url(${fonts.thin.url}) format('truetype');
      }
      @font-face {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: ${fonts.extraLight.weight};
        src: url(${fonts.extraLight.url}) format('truetype');
      }
      @font-face {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: ${fonts.light.weight};
        src: url(${fonts.light.url}) format('truetype');
      }
      @font-face {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: ${fonts.regular.weight};
        src: url(${fonts.regular.url}) format('truetype');
      }
      @font-face {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: ${fonts.medium.weight};
        src: url(${fonts.medium.url}) format('truetype');
      }
      @font-face {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: ${fonts.semiBold.weight};
        src: url(${fonts.semiBold.url}) format('truetype');
      }
      @font-face {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: ${fonts.bold.weight};
        src: url(${fonts.bold.url}) format('truetype');
      }
      @font-face {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: ${fonts.extraBold.weight};
        src: url(${fonts.extraBold.url}) format('truetype');
      }
      @font-face {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: ${fonts.black.weight};
        src: url(${fonts.black.url}) format('truetype');
      }
      html {
        box-sizing: border-box;
      }
      *,
      *:before,
      *:after {
        box-sizing: inherit;
      }
      html,
      body {
        padding: 0;
        margin: 0;
        background: #fff;
        min-height: 100%;
        font-family: 'Poppins', sans-serif;

        & * {
          padding: 0;
          margin: 0;
        }
      }
      input,
      button {
        outline: none;
      }
    `}
  />
);

export default GlobalStyles;
