import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// eslint-disable-next-line
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

// eslint-disable-next-line
import {Voting, Gallery, Breeds, StaticPart, Main} from '../src/components/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <main>
    <StaticPart/>
          {/*<Main/>*/}
          <Voting />
          {/* <Breeds />*/}
          {/*<Gallery />*/}
  </main>
);

