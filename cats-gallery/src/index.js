import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import StaticPart from './components/static/StaticPart';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Main from './components/main/main';
import Breeds from './components/breeds/Breeds';
import Gallery from './components/gallery/Gallery';
import Voting from './components/voting/Voting';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <main>
    <StaticPart />
          <Main/>
         {/*  <Voting />
          <Breeds />
          <Gallery />*/}
  </main>
);

