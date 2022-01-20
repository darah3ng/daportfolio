import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Header from './components/sections/Header';
import Homepage from './components/screens/Home';
import AboutPage from './components/screens/About';
import ProjectsPage from './components/screens/Projects';

function Routes() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/about" component={AboutPage} />
        <Route path="/projects" component={ProjectsPage} />
      </Switch>
  </Router>
  );
}

export default Routes;
