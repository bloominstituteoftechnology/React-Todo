import React, { Component } from 'react';


class Todo extends Component {

  handleClick = () => {
    this.props.toggleTodoCompleted(this.props.index)
  }

  handleButton = () => {
    this.props.removeTodo(this.props.index);
  }

  render() {
    let style = {
      "textDecoration": this.props.todo.completed ? "line-through" : "none",
    }
    return (
      <div className="todo">
      <div className="todoTask" style={style} onClick={this.handleClick}>
        {this.props.todo.text}
      </div>
      <div className="button" onClick={this.handleButton}>&times;</div>
      </div>
    );
  }
}

export default Todo;