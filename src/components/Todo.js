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
      e.preventDefault();
    this.setState({
      completed: this.complete = !this.complete, 
    });
  }

  render() {
    let style = {
      "textDecoration": this.state.completed ? "line-through" : "",
    }
    return (
      <li>
        <input class="checkBox" type="checkbox" onClick={this.handleClick.bind(this)}/>
        <label style={style}>{this.props.task.text}</label>
      </li>
    );
  }
}

export default Todo;