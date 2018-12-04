import React from 'react';

class Todo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <p className={`task ${this.props.completed}`}>{this.props.name}</p>
    );
  }
}

export default Todo;
