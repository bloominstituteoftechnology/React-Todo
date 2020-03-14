import React from "react";
import Todo from "./Todo.js";
import shortid from "shortid";

class TodoForm extends React.Component {
    constructor() {
		super();
		this.state = {
			text: "",
		};
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit({
            text: this.state.text,
            id: shortid.generate(),
            complete: false
        })
        this.setState({
            text: ""
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    name="text"
                    value={this.state.text}
                    onChange={this.handleChange}
                    placeholder="todo..."
                />       
                <button onClick={this.handleSubmit}>Add Todo</button>
                <button onClick={this.handleComplete}>Clear Completed</button>
            </form>

        );
    }
}

export default TodoForm;