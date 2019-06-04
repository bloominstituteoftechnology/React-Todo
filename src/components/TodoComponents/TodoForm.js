import React from 'react';

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: ''
    };
  }

  handleChanges = (e) => {
   this.setState({ [e.target.name]: e.target.value });
  }

  submitTodo = (e) => {
    e.preventDefault();
     // take the todo off of state
     // send that todo to a function defined on App.js
     this.props.addTodo(this.state.todo)
     // reset the state
     this.setState({ item: ''});
  }
  

  render() {
    return (
      <form onSubmit={this.submitTodo}>
       <input
         type='text'
         name='todo'
         value={this.state.task}
         onChange={this.handleChanges}
        />
        <button type='submit'>Add ToDo</button>
        <button>Clear Completed</button>
      </form>
    );
  };
};

export default TodoForm;
