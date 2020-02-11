import React, { Component } from 'react';


class TodoForm extends Component {

    constructor() {
        super();
        this.state = {
            newTask: ''
        };
    }

handleChanges = e => {
    this.setState({

        newTask: e.target.value
    });
};

handleSubmit = e =>{
    e.preventDefault();
    this.props.addNewTask(this.state.newTask);
    this.setState({ newTask: ''});
};

render() {
    console.log ('rendering form');
    return (
        <form onSubmit={this.handleSubmit}>
        <input
        type="text"
        name="newItem"
        value={this.state.newTask}
        onChange={this.handleChanges}
        />
        <button>Add New To Do Item</button>
        </form>

        );
    };
}

export default TodoForm;

