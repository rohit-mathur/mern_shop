import React, { Component } from 'react'
import { Provider } from 'react-redux';
import DevTools from './devTools';
import { Router } from './../../services';

class App extends Component {
    render() {
        return (
            <Provider store={this.props.store}>
                <Router children={this.props.routes} />
                <DevTools />
            </Provider>
        )
    }
}

export default App
