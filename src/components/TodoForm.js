import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            todoName: ''
        };
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTodo(this.state.todoName);
    };

    handleChanges = e => {
        this.setState({ todoName: e.target.value });
    };

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChanges} value={this.state.todoName} type='text' name="todo" />
                    <button>Add Todo</button>
                </form>
                <button onClick={e => this.props.clearPurchased()} >Clear Completed</button>
            </div>
        )
    }

};

export default TodoForm;