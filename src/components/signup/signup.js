import React, { Component } from 'react';
import { Container, Card, CardHeader, CardBody, Button, Form, FormGroup, Input, InputGroupAddon } from 'reactstrap';
import { FaFacebook, FaGoogle, FaEnvelope, FaKey, FaMobileAlt } from "react-icons/fa";

class SignUp extends Component {
    render() {
        const { onInputChange } = this.props;
        return (
            <Container fluid className="primary-bg full-screen-height auth-card">
                <Card>
                    <CardHeader>Become a Seller</CardHeader>
                    <CardBody>
                        <Form method="post">
                            <FormGroup>
                                <InputGroupAddon addonType="prepend">
                                    <FaEnvelope />
                                </InputGroupAddon>
                                <Input type="email" name="email" placeholder="Email Address" onChange={onInputChange} />
                            </FormGroup>
                            <FormGroup>
                                <InputGroupAddon addonType="prepend">
                                    <FaKey />
                                </InputGroupAddon>
                                <Input type="password" name="password" placeholder="Password" onChange={onInputChange} />
                            </FormGroup>
                            <FormGroup>
                                <InputGroupAddon addonType="prepend">
                                    <FaKey />
                                </InputGroupAddon>
                                <Input type="password" name="cpassword" placeholder="Confirm Password" onChange={onInputChange} />
                            </FormGroup>
                            <FormGroup>
                                <InputGroupAddon addonType="prepend">
                                    <FaMobileAlt />
                                </InputGroupAddon>
                                <Input type="number" name="phone" placeholder="Mobile Number" onChange={onInputChange} />
                            </FormGroup>
                            <Button type="button" className="primary-button full-width" onClick={this.props.signUpRequest}>Sign Up</Button>
                        </Form>
                        <div className="separator text-center">OR</div>
                        <div className="text-center">
                            <FaFacebook className="mx-2" color="#3b5998" size={24} />
                            <FaGoogle className="mx-2" color="#db3236" size={24} />
                        </div>
                    </CardBody>
                </Card>
            </Container>
        )
    }
}

export default SignUp