import React from 'react';

class Todo extends React.Component {

  // constructor() {
  //   super();
  //   this.state = {
  //     todo: this.props.todo
  //   };
  // }

  render() {
    return (
      <li>{this.props.todo.description}</li>
    );
  }
}

export default Todo;
