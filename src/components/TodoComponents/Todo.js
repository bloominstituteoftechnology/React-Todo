import React from 'react';

class Todo extends React.Component {
  constructor(props) {
    super();

  };
  render() {
    return (
      <>
        <p>{this.props.task}</p>

      </>
    )
  }
}

export default Todo;