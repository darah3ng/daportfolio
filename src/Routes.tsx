import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Header from './components/sections/Header';
import Homepage from './components/screens/Home';
import MiniProjectsPage from './components/screens/Miniprojects';

function Routes() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/miniprojects" component={MiniProjectsPage} />
      </Switch>
  </Router>
  );
}

export default Routes;
