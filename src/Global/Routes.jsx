import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Comments from '../Components/Comments';
import Users from '../Components/Users';

const Routes = () => {
  // '/': () => <Home />,
  return (
    <Router>
      <Switch>
        <Route component={Users} path="/" exact />
        <Route component={Comments} path="/comments" exact />
      </Switch>
      </Router>
  );
};

export default Routes;
