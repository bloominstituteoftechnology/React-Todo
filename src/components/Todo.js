import React, { Component } from 'react';


class Todo extends Component {
  constructor() {
    super();
  }

  handleClick = () => {
    this.props.stateHandler(this.props.index)
  }

  handleButton = () => {
    this.props.removeTodo(this.props.index);
  }

  render() {
    let style = {
      "textDecoration": this.props.todo.completed ? "line-through" : "none",
    }
    return (
      <div className="todoTask">
        <label style={style}>
          <input className="checkBoxes" id="checkBox" type="checkbox" onClick={this.handleClick}/>
          {this.props.todo.text}
        </label>
        <button className="button" onClick={this.handleButton}>&times;</button>
      </div>
    );
  }
}

export default Todo;