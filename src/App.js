import React from 'react';

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor(){
    super();
    this.state = {
      message: 'Hello Lambda',
      newTodo: '',
      completed: false,
    };
  }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  newTodoSubmit = event =>{
    console.log(event.target.value);
    this.setState ({
      newTodo: event.target.value,
    })
  }
  submitTodo = event => {
    event.preventDefault();
    console.log(event);
  }
  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <form onSubmit={this.submitTodo}>
          <label htmlFor="newTodo">New Todo</label>
          <input placeholder="New Todo" onChange={this.newTodoSubmit} id="newTodo" name="newTodo" />
          <button type="submit"> Add Todo</button>
        </form>
      </div>
    );
  }
}

export default App;
