import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import StaticPart from './StaticPart';
import Main from './Main';
import Breeds from './Breeds';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <main>
    <StaticPart />
    
       {/*<Main />*/}
       <Breeds />
  </main>
);

