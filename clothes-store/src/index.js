import React from 'react';
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {StrictMode} from 'react';
import { render } from 'react-dom';

const rootElement = document.getElementById('root');

render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
  rootElement
);

