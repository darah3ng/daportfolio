import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Homepage from './components/screens/Home';
import AboutPage from './components/screens/About';
import ProjectsPage from './components/screens/Projects';
import { ArtAnimation } from './components/screens/ArtAnimation';
import PageNotFound from './components/screens/NotFound';
import LifeMotto from './components/screens/LifeMotto';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/career" component={AboutPage} />
        <Route exact path="/projects" component={ProjectsPage} />
        <Route exact path="/lifemotto" component={LifeMotto} />
        <Route exact path="/artanimation" component={ArtAnimation} />

        <Route path="*" component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default Routes;
