import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import {Voting, Gallery, Breeds, StaticSection, MainSection} from './components';
import {BREEDS_PATH, GALLERY_PATH, PHOTO_INFO_PATH, VOTING_PATH} from './components/constants/path.constants';
import {PhotoInfo} from "./components/photoInfo/photoInfo";
import {Redirect} from "react-router";

function App () {
  return(
    <main>
        <Redirect to="/home" />
        <StaticSection/>
            <Switch>
                <Route exect path="/home" >
                    <MainSection/>
                </Route>
                <Route path={VOTING_PATH}>
                    <Voting/>
                </Route>
                <Route path={BREEDS_PATH}>
                    <Breeds/>
                </Route>
                <Route path={GALLERY_PATH}>
                    <Gallery/>
                </Route>

                <Route path={PHOTO_INFO_PATH}>
                    <PhotoInfo />
                </Route>
            </Switch>
    </main>
  )
}

export default App
