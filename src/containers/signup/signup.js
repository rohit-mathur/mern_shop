import React, { Component } from 'react';
import SignUp from '../../components/signup';
import { connect } from 'react-redux';
import { signup } from './../../actions';

class SignUpContainer extends Component {
    state = {
        email: '',
        password: '',
        cpassword: '',
        phone: ''
    }

    onInputChange = event => {
        let { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    signUpRequest = (e) => {
        e.preventDefault();
        let { email, password, cpassword, phone } = this.state;
        let reqObj = { email, password, cpassword, phone };
        console.log(reqObj)
        this.props.signup(reqObj);
    }

    render() {
        return (
            <SignUp
                signUpRequest={this.signUpRequest}
                onInputChange={this.onInputChange}
            />
        )
    }
}

const mapDispatchToProps = dispatch => ({
    signup: (reqObj) => dispatch(signup(reqObj))
})

export default connect(null, mapDispatchToProps)(SignUpContainer)