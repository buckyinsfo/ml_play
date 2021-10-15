import React from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import ml_play_theme from './MuiTheme'
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={ml_play_theme}>
      <CssBaseline />
      <App appTitle="ML Play" />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
