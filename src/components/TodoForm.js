import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            newTodo: ""
        };
    }

    handleChanges = e => {
        console.log(e.target.value, e.target.name);
        this.setState({...this.state, newTodo: e.target.value})
    };

    submitTodo = e => {
        e.preventDefault();
        this.props.addTodo(this.state.newTodo)
        this.setState({...this.state, newTodo: ""})
    }
    render() {
        return (
            <form onSubmit={this.submitTodo}>
                <input
                    type="text"
                    name="todo"
                    value={this.state.newTodo}
                    onChange={this.handleChanges}
                />
                <button>Add</button>
            </form>
        );
    }
}

export default TodoForm;