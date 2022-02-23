import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Homepage from './components/screens/Home';
import AboutPage from './components/screens/About';
import ProjectsPage from './components/screens/Projects';
import { ArtAnimation } from './components/screens/ArtAnimation';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/about" component={AboutPage} />
        <Route path="/projects" component={ProjectsPage} />
        <Route path="/artanimation" component={ArtAnimation} />
      </Switch>
  </Router>
  );
}

export default Routes;
