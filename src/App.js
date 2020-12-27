import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Homepage from './view/screens/home';
import AboutPage from './view/screens/about';
import MiniProjectsPage from './view/screens/miniprojects';

function App () {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/miniprojects">Mini Projects</Link></li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/miniprojects" component={MiniProjectsPage} />
        </Switch>
      </div>
  </Router>
  );
}

export default App;
