import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import './Todo.css';


class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addNewtodo: ""
        };
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ addNewtodo: "" });
        this.props.addTodo(this.state.addNewtodo);
    }

    handleChanges = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    className="input"
                    name="addNewtodo"
                    type="text"
                    placeholder="...todo"
                    value={this.state.addNewtodo}
                    onChange={this.handleChanges}
                />

                <Button
                    className="button"
                    type="submit">
                    Add Todo
                </Button>

                <Button
                    className="button"
                    onClick={this.props.filterTodos}>
                    Clear Completed
                </Button>
            </form>
        );
    }
}
export default TodoForm;

