import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Comments from '../Components/Comments';
import Users from '../Components/Users';
import GlobalSpinner from './Spinner/GlobalSpinner';
import GlobalSpinnerContextProvider from "./Spinner/GlobalSpinnerContext";


const Routes = () => {
  // '/': () => <Home />,
  return (
      <Switch>
      <GlobalSpinnerContextProvider>
       <GlobalSpinner />
        <Route component={Users} path="/" exact />
        <Route component={Comments} path="/comments" exact />
        </GlobalSpinnerContextProvider>
      </Switch>
  );
};

export default Routes;
