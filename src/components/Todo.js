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
          {this.props.todo}
        </div>
        <button onClick={this.handleDel}>x</button>
      </div>
    );
  }
}

export default Todo;
