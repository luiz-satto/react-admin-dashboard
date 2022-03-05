import React from 'react';
import ReactDOM from 'react-dom';

import Layout from './components/Layout';

import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './assets/css/grid.css';
import './assets/css/index.css';

document.title = 'My CRM';

ReactDOM.render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>,
  document.getElementById('root')
);