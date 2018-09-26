import React from 'react';
import './Todo.css';


class TodoForm extends React.Component {
  constructor(props) {
    super();

    this.state = {
      controller: props.controller
    };
  }

  render() {
    return (
      <div className="todo-form">
        <input   // {this.state.controller.state.inputValue}
            onChange={this.state.controller.inputHandler} />
        <button onClick={this.state.controller.addHandler}>Add Todo</button>
        <button onClick={this.state.controller.clearHandler}>Clear Completed</button>
      </div>
    );
  }
}

export default TodoForm;
