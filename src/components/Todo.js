import React, { Component } from 'react';


class Todo extends Component {
  constructor(props) {
    super(props);
    this.complete = this.props.task.completed
    this.state = {
      completed: this.complete
    };
  }

  handleClick = (e) => {
    this.setState({
      completed: this.complete = !this.complete, 
    });
  }

  render() {
    let style = {
      "textDecoration": this.state.completed ? "line-through" : "",
    }
    return (
      <div className="todoTask">
        <label className="todoTask" style={style}>
          <input id="checkBox" type="checkbox" onClick={this.handleClick}/>
          {this.props.task.text}
        </label>
      </div>
    );
  }
}

export default Todo;