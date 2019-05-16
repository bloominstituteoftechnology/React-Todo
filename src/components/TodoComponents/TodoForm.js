import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            todo: ''
        };
    }

    changeTodo = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitTodo = e => {
        e.preventDefault();
        this.setState({ todo: '' });
        this.props.addTodo(e, this.state.todo);
    };

    render() {
        console.log('render form');

        return (
            <form onSubmit={this.submitTodo}>
                <input
                type='text'
                value={this.state.todo}
                name='todo'
                onChange={this.changeTodo}
                placeholder={'...type Task to Track'}
                />
                <button>
                    Track
                </button>
            </form>
        );
    }
}

export default TodoForm;