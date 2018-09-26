import React, { Component } from 'react'

class TodoForm extends Component {

    state = {todo: {}};

    inputChange = event => {
        this.setState({
          todo: {id: Date.now(), task: event.target.value, completed: false}
        });
      };

    render() {
        return (
        <div>
            <form onSubmit={(e) => {
                this.props.addTodo(this.state.todo);
                e.preventDefault();
            }}>
            <input onChange={this.inputChange} />
            <button type="submit">Add</button>
            <button>Clear Selected</button>
            </form>
        </div>
        )
    }
}

export default TodoForm;
