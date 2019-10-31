import React from 'react'

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <form>
        <input
          type='text'
        />
      </form>
    );
  }
}

export default TodoForm;