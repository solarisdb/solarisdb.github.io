import { createGlobalStyle } from 'styled-components';
import { transparentize } from 'polished';
import { themeColor } from './color';

export const PRIMARY_COLOR = '#0079DB';
export const PRIMARY_TEXT_COLOR = '#FFFFFF';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: none;
  }

  :root {
      //--nextra-navbar-height: 93px;

      --primary-color: ${PRIMARY_COLOR};
      --primary-low-opacity-color: ${transparentize(0.85, PRIMARY_COLOR)};
  }

  html {
      --text-main: #101828;
      --text-secondary: #475467;
      --logo-color: #162427;
      --bg-color: #ffffff;
      --bg-secondary: ${transparentize(0.96, PRIMARY_COLOR)};
      --border-color: #d0d5dd;
      font-family: "Inter", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Noto Sans, Ubuntu, Cantarell, Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;

      &[class~='dark'] {
          --text-main: #fff;
          --text-secondary: #a3a3a3;
          --logo-color: #ffffff;
          --bg-color: #111111;
          --bg-secondary: ${transparentize(0.96, PRIMARY_COLOR)};
          --border-color: #2f2a22;
      }

      color: var(--text-main);
  }
  
  body {
      background: ${themeColor('background')} !important;
  }

  .nextra-nav-container {
      & > nav {
          justify-content: flex-start;
          gap: 16px;

          a {
              font-size: 16px;
          }

          & > :first-child {
              @media screen and (min-width: 768px) {
                  margin-right: 1.5rem;
              }
          }
      }

      .nextra-search {
          margin-left: auto;
      }

      & ~ footer {
          background: inherit !important;
      }
  }

  .nextra-sidebar-container > :last-child {
      display: none;
  }
  .nextra-search + button {
      margin-left: -8px;
  }
`;
