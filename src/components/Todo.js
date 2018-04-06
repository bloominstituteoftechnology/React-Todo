import React from "react";

class Todo extends React.Component {
  handleStatus = () => {
    this.props.toggleStatus(this.props.index);
  };

  handleButton = () => {
    this.props.removeTodo(this.props.index);
  };

  render() {
    let style = {
      textDecoration: this.props.todo.completed ? "line-through" : false
    };
    return (
      <div className="todo">
        <div className="todoItem" style={style} onClick={this.handleStatus}>
          {this.props.todo.text}
        </div>
        <div className="button" onClick={this.handleButton}>
          X
        </div>
      </div>
    );
  }
}

export default Todo;
