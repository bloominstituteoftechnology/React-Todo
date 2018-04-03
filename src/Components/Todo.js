import React, { Component } from 'react';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: false
    };
  }

  completeTodo = () => {
    const completed = this.state.completed;
    this.setState({
      completed: !completed});
  }

  render() {
    return (
      <div onClick={this.completeTodo}>
      {this.props.todo}
      </div>
    );
  }
}

export default Todo;