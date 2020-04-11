import React, {Suspense, lazy} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

const Login = lazy(() => import('./containers/login'));
const SignUpContainer = lazy(() => import('./containers/signup'));

const routes = (
    <Suspense fallback={<div />}>
        <Switch>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUpContainer} />
            <Redirect from="/" to="/login" />
        </Switch>
    </Suspense>
);

export default routes;
