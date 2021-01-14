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

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input />
                    <button>Add Todo</button>
                </form>
                <button>Clear Completed</button>
            </div>
        )
    }

};

export default TodoForm;