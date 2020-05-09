import React from 'react';

class TodoForm extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
    constructor() {
    super();
    this.state = {
        newTodoName: ''
    }
    }

    handleChanges = e => {
        e.preventDefault();
        this.setState({
            newTodoName: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addNewTodo(this.state.newTodoName);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    type='text'
                    name='todo'
                    value={this.state.newTodoName}
                    onChange={this.handleChanges}
                />
                <button>Add</button>
            </form>
        );
    }
}

export default TodoForm;