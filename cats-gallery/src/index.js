import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import StaticPart from './components/staticPart/StaticPart';
// eslint-disable-next-line
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
// eslint-disable-next-line
import Main from './components/main/main';
// eslint-disable-next-line
import Breeds from './components/breeds/Breeds';
// eslint-disable-next-line
import Gallery from './components/gallery/Gallery';
// eslint-disable-next-line
import Voting from './components/voting/Voting';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <main>
    <StaticPart/>
          {/*<Main/>*/}
          <Voting />
           {/*<Breeds />*/}
          {/*<Gallery />*/}
  </main>
);

