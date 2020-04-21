import React, { Component } from 'react';
import { Button, Container } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Dashboard extends Component {
    render() {
        return (
            <Container>
                <NavLink to="/categories">
                    <Button>Categories</Button>
                </NavLink>
            </Container>
        )
    }
}

export default Dashboard;