import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            todo: ''
        };
    }

    handleChanges = e => {
        this.setState({
            [e.target.value]: e.target.value
        });
    };

    submitTodo = e => {
        e.preventDefault();
        this.props.addTodo(this.state.todo);
    };

    render() {
        return (
            <form onSubmit={this.submitTodo}>
                <input
                    type="text"
                    value={this.todo}
                    name="todo"
                    onChange={this.handleChanges}
                />
                <button>Add Todo</button>
            </form>
        );
    }
}

export default TodoForm;