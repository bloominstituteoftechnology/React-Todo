import React from 'react';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todos: [],
      task: ''
    }
  }

  // set task to input
  handleToDoInput = (event) => {
    // console.log(event.target.value);
    this.setState({ task: event.target.value });
  };

  // create a copy of todos[], assign id, completed and task
  addTodo = event => {
    let newArr = [...this.state.todos] // Example: [..array] => 1, 2, 3 => [1, 2, 3] => newArr
    newArr.push({id: Date.now(),
      completed: false,
      task: this.state.task
    }) 
    // assign content of newArr to todos and clear content of task after input
    this.setState({todos: newArr, task: ''})   
  }

  render() {
    console.log("rendered again!")
    return (
      <div className="App">
        <h2>Welcome to your Todo App!</h2>
        <input
          type = "text"
          placeholder = "To do"
          onChange = {this.handleToDoInput}
          value = {this.state.task}
        />
        <button onClick={this.addTodo}>Add Todo</button>
        <button>Clear Completed</button>
        <div>
          {this.state.todos.map(todo => <p key={todo.id}>{todo.task}</p>)}
        </div>
      </div>
    );
  }
}

export default App;
