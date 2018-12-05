import React, { Component } from 'react';

class TodoForm extends Component {

  state = {
    todoTxt: 'Add a task'
  }

  render() {
    return (
      <div>
        <input
          placeholder="New Task"
          type="text"
          value={this.state.todoTxt}
          onChange={(e) => this.setState({ todoTxt: e.target.value })} />

        <button
          onClick={() => {
            this.props.clicked(this.state.todoTxt);
            this.setState({ todoTxt: '' })
          }}>Add Task
        </button>

        <button>Delete Selected</button>
      </div>
    );
  }
}

export default TodoForm;