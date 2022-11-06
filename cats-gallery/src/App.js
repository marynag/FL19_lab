import React from 'react';
import './App.css';

// eslint-disable-next-line
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

// eslint-disable-next-line
import {Voting, Gallery, Breeds, StaticSection, MainSection} from './components';

function App () {
  return(
    <main>
      <StaticSection/>
        {/*<MainSection/>*/}
        <Voting />
        {/* <Breeds />*/}
        {/*<Gallery />*/}
    </main>
  )
}

export default App
