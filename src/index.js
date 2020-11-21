import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import 'bootstrap/dist/css/bootstrap.css'

const theme = createMuiTheme({
  typography: {
    fontFamily: ('Spoqa Han Sans'),
  },
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
);
