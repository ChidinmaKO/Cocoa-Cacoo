import React, { createElement } from 'react';
import { render } from 'react-dom';
import AppRouter from './router';

/* eslint-disable-next-line react/jsx-filename-extension */
render(<AppRouter />, document.getElementById('app'));

if(module.hot) {
  module.hot.accept();
}
