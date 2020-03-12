import React from 'react';

class TodoForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      description: ''
    };
  }

  handleChange = event => {
    this.setState({
      description: event.target.value
    });
  }

  handleAddTodo = event => {
    event.preventDefault();
    this.setState({
      description: ''
    });
    this.props.addTodo(this.state.description);
  }

  render() {
    return (
      <form onSubmit={this.handleAddTodo}>
        <input
          type='text'
          placeholder='create a todo'
          name='todo'
          value={this.state.description}
          onChange={this.handleChange}
        />
        <button type='submit'>Add Todo</button>
      </form>

    );
  }
}

export default TodoForm;
