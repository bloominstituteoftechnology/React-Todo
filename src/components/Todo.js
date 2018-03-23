import React, { Component } from 'react';


class Todo extends Component {
  constructor(props) {
    super(props);
  }

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
      <div className="todoTask" style={style} onClick={this.handleClick}>
        {this.props.todo.text}
        <button className="button" onClick={this.handleButton}>&times;</button>
      </div>
    );
  }
}

export default Todo;