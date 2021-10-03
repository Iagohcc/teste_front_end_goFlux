import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './pages/layout'
import App from './App';
import "./assets/styles/main.scss";

ReactDOM.render(
  <React.StrictMode>
    <Layout>
    <App />
    </Layout>
  </React.StrictMode>,
  document.getElementById('root')
);

