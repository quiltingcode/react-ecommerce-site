import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {StrictMode} from 'react';
import { UserProvider } from './contexts/user.context';

import './index.scss';

const rootElement = document.getElementById('root');

render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </BrowserRouter>
  </StrictMode>,
  rootElement
);

