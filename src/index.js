import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles/common.scss';

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

module.hot.accept();