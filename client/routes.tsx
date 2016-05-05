import * as React from 'react';
import * as Router from 'react-router';
import { Route, IndexRoute } from 'react-router';

import AppComponent from './app.component';
import MainComponent from './main.component';
//import TreesComponent from './components/trees.component';
var Settings = require('./constraints/settings.json');

var RouteMap = (
    <Route path={Settings.uBaseName} component={AppComponent}>
        <IndexRoute component={MainComponent}/>
        <Route path="trees/:treeId" component={MainComponent}/>
    </Route>
);

export default RouteMap;
