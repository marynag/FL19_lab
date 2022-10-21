import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// eslint-disable-next-line
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
// eslint-disable-next-line
import {Voting, StaticPart, AddNavigationBlocks, Breeds, Gallery, Main} from './components';

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

