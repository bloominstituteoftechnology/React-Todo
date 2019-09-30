import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: '',
      error: false,
    };
  }

  handleChange = e => {
    console.log('handleChange: ', e.target.name, e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e, todo) => {
    e.preventDefault();

    const todoLength = todo.replace(/\s/g, '').length;
    if (todoLength === 0) {
      this.setState(prevState => ({ error: !prevState.error }));
      return false;
    } else {
      this.setState(prevState => ({ error: !prevState.error }));
    }

    this.props.addTodo(todo);
    this.setState({
      todo: '',
    });
  };

  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e, this.state.todo)}>
        <input type='text' value={this.state.todo} onChange={e => this.handleChange(e)} name='todo' />
        <p>
          {this.state.error &&
            `You're trying to add a todo without a meaningful title. Please amend your todo and add a meaningful title.`}
        </p>
        <button type='submit'>Add Item</button>
      </form>
    );
  }
}

export default TodoForm;
