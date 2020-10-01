import React from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      newTodo: ""
    }
  }

  submit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.newTodo);
    this.setState({
      ...this.state,
      newTodo: ""
    })
  }

  onChange = e => {
    console.log(e.target.name, e.target.value)
    this.setState({
      ...this.state,
      newTodo: e.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.submit}>
        <TextField
          id="standard-basic"
          label="Add New Task Here"
          type="text"
          name="todo"
          value={this.state.newTodo}
          onChange={this.onChange}
        />
        <Button variant="contained" color="primary" onClick={this.submit}>
          Add Todo
        </Button>
      </form>
    );
  }
}

export default TodoForm;