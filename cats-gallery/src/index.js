import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import StaticPart from './components/static/StaticPart';
import Main from './components/main/main';
import Breeds from './components/breeds/Breeds';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <main>
    <StaticPart />
    {/*<Breeds />*/}
    <Main/>
  </main>
);

