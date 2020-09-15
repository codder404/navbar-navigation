import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Products from './pages/Products';
import Reports from './pages/Reports';
import Navbar from './components/Navbar';

function Routes () {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products" exact component={Products} />
        <Route path="/reports" component={Reports} />
      </Switch>
    </Router>
  )
}

export default Routes;