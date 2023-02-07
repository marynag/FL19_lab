import React, {useEffect} from 'react';
import './App.css';

// eslint-disable-next-line
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

// eslint-disable-next-line
import {Voting, Gallery, Breeds, StaticSection, MainSection} from './components';
import { BREEDS_PATH, GALLERY_PATH, VOTING_PATH } from './components/constants/path.constants';
import {PhotoInfo} from "./components/photoInfo/photoInfo";
import {useHistory} from "react-router";

function App () {
    const history = useHistory();

    useEffect(()=>{
        history.push('/home');
    },[])

  return(
    <main>
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

                <Route path={'/img'}>
                    <PhotoInfo />
                </Route>
            </Switch>
    </main>
  )
}

export default App
