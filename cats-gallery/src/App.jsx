import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import {
	Voting,
	Gallery,
	Breeds,
	StaticSection,
	MainSection,
	PhotoDetails,
} from './components';
import { PATHS } from './components/constants/path.constants';

function App() {
	return (
		<main>
			<StaticSection />
			<Switch>
				<Route exect path={PATHS.home}>
					<MainSection />
				</Route>
				<Route exect path={PATHS.voting}>
					<Voting />
				</Route>
				<Route exect path={PATHS.breeds}>
					<Breeds />
				</Route>
				<Route exect path={PATHS.gallery}>
					<Gallery />
				</Route>

				<Route exect path={PATHS.photo}>
					<PhotoDetails />
				</Route>

				<Route exect path='*'>
					<MainSection />
				</Route>
			</Switch>
		</main>
	);
}

export default App;
