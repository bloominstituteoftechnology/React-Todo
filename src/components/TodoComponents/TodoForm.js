import React, { Component } from 'react';

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = { listTask: "" }
    };

    changeHandler = event => {
        this.setState({ listTask: event.target.value });
    };

    submitHandler = event => {
        event.preventDefault();
        this.props.addNewTask(this.state.listTask);
        this.setState({ listTask: ""});
    };

    clearInputField = event => {
        this.setState({ listTask: "" });
        this.props.addTask(event, this.state.task);
    };

    render(){
        return (
            <form onSubmit={this.submitHandler}>
                <input
                    type="text"
                    value={this.state.listTask}
                    onChange={this.changeHandler}
                    placeholder="...todo"
                    name="task"
                />
                <button
                    className="button">Add Task
                </button>
                <button
                    className="button"
                    onClick={this.props.clearCompletedTasks}>
                    Clear Completed
                </button>
            </form>
        );
    }
};

export default TodoForm;