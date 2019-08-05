import React from 'react';
import { Form, FormInput, FormGroup, Button } from "shards-react";


class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            item: ''
        };
    }
handleChanges = e => {
    this.setState({
        [e.target.name]: e.target.value
    });
};

submitItem = e => {
    e.preventDefault();
    this.props.addItem(this.state.item);
};

render () {
    return (
        <Form onSubmit={this.submitItem}>
            <FormGroup>
            <FormInput 
                type="text"
                value={this.state.item}
                name="item"
                onChange={this.handleChanges}
            />
            <Button theme='dark'>Add</Button>
            </FormGroup>
        </Form>
    )
}


   
}

export default TodoForm;