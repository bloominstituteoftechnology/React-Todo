import React from 'react';
import './Todo.css';

class Todo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <p className={`task ${this.props.completed}`} onClick={this.props.completedHandler}>{this.props.name}</p>
    );
  }
}

export default Todo;
