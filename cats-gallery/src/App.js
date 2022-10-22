import React from 'react';
import './App.css';

// eslint-disable-next-line
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

// eslint-disable-next-line
import {Voting, Gallery, Breeds, StaticPart, Main} from './components';

function App () {
  return(
    <main>
      <StaticPart/>
            {/*<Main/>*/}
            <Voting />
            {/* <Breeds />*/}
            {/*<Gallery />*/}
    </main>
  )
}

export default App
