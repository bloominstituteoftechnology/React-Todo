import React from 'react';

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
