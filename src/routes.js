import React, {Suspense, lazy} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
const LoginContainer = lazy(() => import('./containers/login'));
const SignUpContainer = lazy(() => import('./containers/signup'));
const Dashboard = lazy(() => import('./containers/dashboard'));
const Categories = lazy(() => import('./containers/categories'));

const routes = (
    <Suspense fallback={<div />}>
        <Switch>
            <Route path="/login" component={LoginContainer} />
            <Route path="/signup" component={SignUpContainer} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <PrivateRoute path="/categories" component={Categories} />
            <Redirect from="/" to="/login" />
        </Switch>
    </Suspense>
);

export default routes;
