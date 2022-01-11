import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Homepage from './components/screens/home';
import AboutPage from './components/screens/about';
import MiniProjectsPage from './components/screens/miniprojects';

function Routes () {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/miniprojects" component={MiniProjectsPage} />
      </Switch>
  </Router>
  );
}

export default Routes;
