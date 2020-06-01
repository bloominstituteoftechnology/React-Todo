import React from "react";

export default class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            todoName: "",
        }
    }
    handleChanges = e => {
        this.setState({
            todoName: e.target.value
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTodo(this.state.todoName);
        this.setState({
            todoName: "",
        });
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="todoName" value={this.state.todoName} onChange={this.handleChanges} placeholder="...todo"></input>
                <button>Add todo</button>
            </form>
        )
    }
}