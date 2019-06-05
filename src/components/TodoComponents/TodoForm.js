import React, { Component } from 'react';
import './Todo.css';

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: ''
        };
    };

    changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value});
    };

    submitTodo = event => {
        this.setState({todo: ''});
        this.props.addTodo(event, this.state.todo);
    };

    render() {
        return (
            <form onSubmit={this.submitTodo}>
                <input
                    type="text"
                    value={this.state.todo}
                    onChange={this.changeHandler}
                    placeholder="...todo"
                    name= "todo"
                />
                <button className="submit-button">Add Task</button>
            </form>
        );
    };
};

export default TodoForm;