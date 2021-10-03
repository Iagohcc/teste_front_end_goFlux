import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './pages/layout'
import App from './App';
import "./assets/styles/main.scss";

<script src="https://unpkg.com/boxicons@2.0.9/dist/boxicons.js"></script>

ReactDOM.render(
  <React.StrictMode>
    <Layout>
    <App />
    </Layout>
  </React.StrictMode>,
  document.getElementById('root')
);

