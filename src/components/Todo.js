import React, { Component } from 'react';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: props.todo,
      textDecoration: 'none',
      clicked: false,
    }
  }

  todoClicked = (e) => {
    if (!this.state.clicked) {
      this.setState({
        textDecoration: 'line-through',
        clicked: true,
      });
    } else {
      this.setState({
        textDecoration: 'none',
        clicked: false,
      })
    }
  }

  render() {
    return (
      <div onClick={this.todoClicked} style={{ textDecoration: this.state.textDecoration }}>
        {this.state.todo}
      </div>
    )
  }
}

export default Todo;