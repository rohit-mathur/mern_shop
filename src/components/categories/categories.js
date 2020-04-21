import React, {Component} from 'react';
import { Button, Container } from 'reactstrap';

class Categories extends Component{
    render(){
        return (
            <Container>
                <Button onClick={this.props.toggleModal}>Add Category</Button>
            </Container>
        )
    }
}

export default Categories;