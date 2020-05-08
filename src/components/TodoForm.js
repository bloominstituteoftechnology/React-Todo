import React from 'react';

class TodoForm extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
    constructor() {
    super();
    this.state = {
        newTodo: ''
    }
    }

    handleChanges = e => {
        e.preventDefault();
        this.setState({
            todo: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addNewTodo(this.state.newTodo);
    }

    render() {
        return (
            <div>
                <h2>Welcome to your Todo App!</h2>
            </div>
            <form onSubmit={this.handleSubmit}>
                <input
                type='text'
                name='item'
                value={this.state.newTodo}
                onChange={this.handleChanges}
                />
                <button>Add Todo</button>
            </form>
        );
    }
}

export default TodoForm;