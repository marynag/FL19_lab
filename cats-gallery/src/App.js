import React from 'react';
import './App.css';

// eslint-disable-next-line
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

// eslint-disable-next-line
import {Voting, Gallery, Breeds, StaticSection, MainSection} from './components';

function App () {
  return(
    <main>
        <Router>
            <StaticSection/>
            <Switch>
                <Route exect path="/home">
                    <MainSection/>
                </Route>
                <Route path="/voting">
                    <Voting/>
                </Route>
                <Route path="/breeds">
                    <Breeds/>
                </Route>
                <Route path="/gallery">
                    <Gallery/>
                </Route>

            </Switch>
            {/*<Voting />*/}
            {/* <Breeds />*/}
            {/*<Gallery />*/}
        </Router>
    </main>
  )
}

export default App
