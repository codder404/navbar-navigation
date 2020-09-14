import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';

function Routes () {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Navbar} />
      </Switch>
    </Router>
  )
}

export default Routes;