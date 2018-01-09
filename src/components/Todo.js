import React, { Component } from 'react';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: props.todo.text,
      completed: props.todo.completed,
    }
  }

  todoClicked = (e) => {
    if (!this.state.completed) {
      this.setState({
        completed: true,
      });
    } else {
      this.setState({
        completed: false,
      })
    }
  }

  render() {
    const styles = this.state.completed ? { textDecoration: 'line-through' } : { textDecoration: 'none' }
    return (
      <div onClick={this.todoClicked} style={styles}>
        {this.state.todo}
      </div>
    )
  }
}

export default Todo;