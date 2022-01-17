import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Header from './components/sections/Header';

import Homepage from './components/screens/Home';
import AboutPage from './components/screens/About';
import MiniProjectsPage from './components/screens/Miniprojects';

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
