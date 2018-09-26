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
            <input onChange={this.inputChange} />
            <button onClick={() => this.props.addTodo(this.state.todo)}>Add</button>
        </div>
        )
    }
}

export default TodoForm;
