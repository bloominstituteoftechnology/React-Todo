/*eslint no-unused-vars: "off"*/
import React from 'react';
import { render } from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import createPalette from 'material-ui/styles/palette';

import App from './Container/App';

const theme = createMuiTheme({
  palette: createPalette({
    type: 'dark', // Switching the dark mode on is a single property value change.
  }),
})

// require('!style-loader!css-loader!sass-loader!./index.scss');
render(
  <MuiThemeProvider theme={theme}>
    <App/>
  </MuiThemeProvider>

  , 
  document.getElementById('root')
);
