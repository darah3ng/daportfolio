import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Header from './components/sections/Header';

import Homepage from './components/screens/home';
import AboutPage from './components/screens/about';
import MiniProjectsPage from './components/screens/miniprojects';

function Routes() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/miniprojects" component={MiniProjectsPage} />
      </Switch>
  </Router>
  );
}

export default Routes;
