import React, { Component } from 'react';


class Todo extends Component {
  constructor() {
    super();
  }

  handleClick = (e) => {
    this.props.stateHandler(this.props.index)
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
      </div>
    );
  }
}

export default Todo;