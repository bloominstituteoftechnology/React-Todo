import React from 'react';

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = { newTodoText: '' }; 
  }

  handleChange = e => {
    this.setState({ newTodoText: e.target.value });
  }

  render() {
    return (
      <form>
        <input type="text" name="todo" value={this.state.newTodoText} onChange={this.handleChange} />
      </form>
    );
  }
}

export default TodoForm;