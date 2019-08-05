import React, { Component } from 'react';

class TodoForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.addTodo}>
        <input
          name="task"
          className="new-task-text"
          type="text"
          onChange={this.props.changeNewTodoTaskText}
        />
        <input type="submit" value="Add Item" />
      </form>
    );
  }
}

export default TodoForm;
