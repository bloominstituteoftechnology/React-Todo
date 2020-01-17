import React from 'react';

class ToDoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            newTask: ''
        };
    }

    handleChanges = e => {
        this.setState({ ...this.state, newTask: e.target.value });
      };

    handleSubmit = e => {
    e.preventDefault();
    this.props.addNewTask(this.state.newTask);
    this.setState({ ...this.state, newTask: '' });
    };

    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                <input
                    onChange = {this.handleChanges}
                    type = 'text'
                    name = 'task'
                    value = {this.state.newTask}
                />
                <button type = 'submit'>Add To List</button>
            </form>
        );
    }  
}

export default ToDoForm;