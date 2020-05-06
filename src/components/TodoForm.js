import React from 'react';

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = { newTodoText: '' }; 
  }

  handleChange = e => {
    this.setState({ newTodoText: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.newTodoText) {
      this.props.addNewTodo(this.state.newTodoText);
      this.setState({ newTodoText: '' });
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text" 
          name="todo" 
          value={this.state.newTodoText} 
          onChange={this.handleChange} 
        />
        <button type="submit">Add Todo</button>
        <button onClick={this.props.clearCompleted}>Clear Completed</button>
      </form>
    );
  }
}

export default TodoForm;