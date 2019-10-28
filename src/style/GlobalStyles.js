import { createGlobalStyle } from 'styled-components/macro';

const GlobalStyles = createGlobalStyle`
  html {
    font-size: 100%;
    box-sizing: border-box;
    overflow-y: scroll;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  * {
    min-height: 0;
    min-width: 0;
  }
  body {
    font-size: 1rem;
    line-height: 1.6;
    color: #111;
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Oswald', sans-serif;
    font-weight: bold;
    margin: 0;
  }
  p {
    font-family: 'Lato', serif;
    padding: 0;
    margin: 0;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  img {
    max-width: 100%;
    height: 100%;
  }
  ul, li {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
  }
  button,
  input {
    overflow: visible;
  }
  button,
  select {
    text-transform: none;
  }
  button,
  [type='button'],
  [type='reset'],
  [type='submit'] {
    -webkit-appearance: button;
  }
`;

export default GlobalStyles;
