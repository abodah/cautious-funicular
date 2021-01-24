import React from 'react';
import ReactDOM from 'react-dom';
import { StoreProvider } from 'easy-peasy';
import { ThemeProvider } from '@emotion/react';
import { BrowserRouter as Router } from 'react-router-dom';

import store from 'store';
import theme from 'style/theme';

import NormalizeStyle from 'style/normalize';
import GlobalStyle from 'style/global';
import App from 'components/App';

const AppWrapper = () => (
  <StoreProvider store={store}>
    <ThemeProvider theme={theme}>
      <NormalizeStyle />
      <GlobalStyle />
      <Router>
      <App />
      </Router>
    </ThemeProvider>
  </StoreProvider>
);

ReactDOM.render(<AppWrapper />, document.getElementById('root'));
