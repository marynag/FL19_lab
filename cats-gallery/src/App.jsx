import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import {Voting, Gallery, Breeds, StaticSection, MainSection} from './components';
import {PATHS} from './components/constants/path.constants';
import {PhotoDetails} from "./components/photoDetails/photoDetails";

function App () {
  return(
    <main>
        <StaticSection/>
            <Switch>
                <Route exect path={PATHS.home}>
                    <MainSection/>
                </Route>
                <Route path={PATHS.voting}>
                    <Voting/>
                </Route>
                <Route path={PATHS.breeds}>
                    <Breeds/>
                </Route>
                <Route path={PATHS.gallery}>
                    <Gallery/>
                </Route>

                <Route path={PATHS.photoDetails}>
                    <PhotoDetails />
                </Route>
            </Switch>
    </main>
  )
}

export default App
