import React, { Component } from 'react';
import Login from './../../components/login';
import { connect } from 'react-redux';
import { login } from './../../actions';
import { Redirect } from 'react-router-dom';

class LoginContainer extends Component {
    state = {
        email:'',
        password: ''
    }

    onInputChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    signInRequest = () => {
        const { email, password } = this.state;
        const reqObj = { email, password };
        this.props.login(reqObj)
    }

    render() {
        console.log('render')
        if(sessionStorage.getItem("authToken")){
            return <Redirect from="/login" to="/dashboard" />
        }
        return (
            <Login
                signInRequest={this.signInRequest}
                onInputChange={this.onInputChange}
            />
        )
    }
}

const mapStateToProps = state => ({
    token: state.login.token
})

const mapDispatchToProps = dispatch => ({
    login: reqObj => dispatch(login(reqObj))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)