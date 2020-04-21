import React, { Component } from 'react';
import Categories from './../../components/categories';
import { Modal, ModalHeader, ModalFooter, ModalBody, Button, Form, Input } from 'reactstrap';
import { addCategory } from './../../actions';
import {connect} from 'react-redux';

class CategoriesContainer extends Component {
    state = {
        isModalOpen: false,
        categoryName: '',
        categorySlug: '',
        parentCategory: ''
    }
    toggleModal = () => {
        this.setState({
            isModalOpen: !this.state.toggleModal
        })
    }
    onInputChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    addCategory = () => {
        const {categoryName, categorySlug, parentCategory} = this.state;
        let reqObj = { categoryName, categorySlug, parentCategory }
        this.props.addCategory(reqObj);
    }

    render() {
        return (
            <>
                <Categories
                    toggleModal={this.toggleModal}
                />
                <Modal isOpen={this.state.isModalOpen}
                    toggle={this.toggle}>
                    <ModalHeader toggle={this.toggleModal}>Add Category</ModalHeader>
                    <ModalBody>
                        <Form>
                            <Input type="text" placeholder="Category Name" name="categoryName" onChange={this.onInputChange} />
                            <Input type="text" placeholder="Category Slug" name="categorySlug" onChange={this.onInputChange} />
                            <Input type="select" name="parentCategory" onChange={this.onInputChange}>
                                <option>Parent Category</option>
                            </Input>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.addCategory}>Add Category</Button>{' '}
                        <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    addCategory: reqObj => dispatch(addCategory(reqObj))
})

export default connect(null, mapDispatchToProps)(CategoriesContainer);