import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  MainScreen,
  Test2,
  Test3,
} from '../pages';


export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={MainScreen} />
      <Route path="/test2" exact component={Test2} />
      <Route path="/test3" exact component={Test3} />
    </Switch>
  );
}