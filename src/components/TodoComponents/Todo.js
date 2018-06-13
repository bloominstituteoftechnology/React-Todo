import React from 'react';

class Todo extends React.Component {
  constructor(props) {
    super();
    this.state = {
      task: props.task,
      isCompleted: props.isCompleted
    }
  }

  render() {
    return(
      <li>{this.state.task}</li>
    );
  }    
}

export default Todo;