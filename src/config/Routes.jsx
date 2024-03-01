import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Maps from '../pages/Maps';

const Routes = () => {
  return (
    <Switch>
      <Route path='/confmaps/maps' component={Maps}/>
      <Route path='/confmaps' exact component={Home}/>
    </Switch>
  );
}

export default Routes;