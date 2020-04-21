import React, {Component} from 'react';
import { Route, Redirect } from 'react-router-dom';

class PrivateRoute extends Component {
    render() {
        let {component: Component, ...rest} = this.props
        return (
            <Route
                {...rest}
                render={() => {
                    return sessionStorage.getItem('authToken') ? (
                            <Component {...this.props} />
                        ) : (
                            <Redirect to="/login" />
                        );
                }}
            />
        )
    }
}

export default PrivateRoute;