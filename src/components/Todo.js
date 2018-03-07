import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
  constructor() {
    super();

    this.state = {
      clicked: false
    };
  }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
    this.props.todo.completed = !this.props.todo.completed;
    console.log(this.props.todo);
  };

  handleDel = () => {
    this.props.delTodo.bind(this.props.parent, this.props.index)();
  };

  render() {
    const styles = this.state.clicked
      ? { textDecoration: 'line-through' }
      : { textDecoration: 'none' };

    return (
      <div>
        <div className="propsTodoID" style={styles} onClick={this.handleClick}>
          {this.props.todo.text}
        </div>
        <button onClick={this.handleDel}>x</button>
      </div>
    );
  }
}

export default Todo;
