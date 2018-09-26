import React, { Component } from 'react'

class TodoForm extends Component {

    state = {id: Date.now(), task: "", completed: false};

    inputChange = event => {
        this.setState({
            task: event.target.value
        });
    };

    submitTodo = event => {
        event.preventDefault();
        this.props.addTodo(this.state);
        this.setState({task: ""});
    };

    render() {
        return (
            <div>
                <form onSubmit={this.submitTodo}>
                <input value={this.state.task} onChange={this.inputChange} />
                <button type="submit">Add</button>
                <button>Clear Selected</button>
                </form>
            </div>
        )
    }
}

export default TodoForm;
