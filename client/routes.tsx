import * as React from 'react';
import * as Router from 'react-router';
import { Route, IndexRoute } from 'react-router';

import AppComponent from './app.component';
import DashboardComponent from './dashboard.component';
//import TreesComponent from './components/trees.component';
var Settings = require('./constraints/settings.json');

var RouteMap = (
    <Route path={Settings.uBaseName} component={AppComponent}>
        <IndexRoute component={DashboardComponent}/>
        <Route path="trees/:treeId" component={DashboardComponent}/>
    </Route>
);

export default RouteMap;
