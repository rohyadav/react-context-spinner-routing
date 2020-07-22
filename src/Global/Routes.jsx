import React from 'react';
import { Route, Switch } from 'react-router-dom';
import RandomComments from '../Components/RandomComments';
import RandomUsers from '../Components/RandomUsers';
import GlobalSpinner from './Spinner/GlobalSpinner';
import GlobalSpinnerContextProvider from "./Spinner/GlobalSpinnerContext";


const Routes = () => {
  // '/': () => <Home />,
  return (
      <Switch>
      <GlobalSpinnerContextProvider>
       <GlobalSpinner />
        <Route component={RandomUsers} path="/" exact />
        <Route component={RandomComments} path="/comments" exact />
        </GlobalSpinnerContextProvider>
      </Switch>
  );
};

export default Routes;
