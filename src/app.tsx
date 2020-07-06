import React from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import Home from './pages/Home';
import History from './pages/History';
import Launches from './pages/Launches';
import NotFound from './pages/NotFound';

const MainApp : React.FC<any> = () => (
  <React.StrictMode>
    <Router>
      <Switch>
        <Route
          path="/"
          exact
          component={Home}
        />
        <Route
          path="/history"
          exact
          component={History}
        />
        <Route
          path="/launches"
          exact
          component={Launches}
        />
        <Route
          component={NotFound}
        />
      </Switch>
    </Router>
  </React.StrictMode>
);

export default MainApp;
