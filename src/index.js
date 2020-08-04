import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

import { ApolloProvider } from 'react-apollo';
import CssBaseline from '@material-ui/core/CssBaseline';

import apolloClient from './services';

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={apolloClient}>
      <CssBaseline />
      <App />
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
