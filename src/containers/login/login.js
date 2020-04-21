import React, { Component } from 'react';
import Login from './../../components/login';
import { connect } from 'react-redux';
import { login } from './../../actions';
import { Redirect } from 'react-router-dom';
import { PropagateLoader } from 'react-spinners';

class LoginContainer extends Component {
    state = {
        email: '',
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
        
        if (sessionStorage.getItem("authToken")) {
            return <Redirect from="/login" to="/dashboard" />
        }
        return (
            <>
                <Login
                    signInRequest={this.signInRequest}
                    onInputChange={this.onInputChange}
                />
                {
                    this.props.loading && (
                        <div className="loader">
                            <PropagateLoader size={15}
                                color={"#123abc"}
                                loading={true} />
                        </div>
                    )
                }

            </>
        )
    }
}

const mapStateToProps = state => ({
    loading: state.login.loading,
    token: state.login.token
})

const mapDispatchToProps = dispatch => ({
    login: reqObj => dispatch(login(reqObj))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)