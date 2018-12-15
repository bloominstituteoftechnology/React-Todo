import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

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
    newArr.push(
      {id: Date.now(),
      completed: false,
      task: this.state.task
    }) 
    // console.log(newArr);
    // assign content of newArr to todos and clear content of task after input
    this.setState({todos: newArr, task: ''})   
  }


  render() {
    // console.log("rendered again!")
    console.log(this.state.todos);
    return (
      <div className="App">
        <h2>Welcome to your Todo App!</h2>
        {/* Instead of input and buttons <TodoForm /> will be here */}

        {/* <input
          type = "text"
          placeholder = "To do"
          onChange = {this.handleToDoInput}
          value = {this.state.task}
        />
        <button onClick={this.addTodo}>Add Todo</button>
        <button>Clear Completed</button> */}
        <TodoForm inputHandleFunc={this.handleToDoInput} 
                  inputValue={this.state.task} 
                  submitButtonHandleFunc={this.addTodo}
                  // clearButtonHandleFucn={}
          />
        <div>
          {this.state.todos.map(todo => <p key={todo.id}>{todo.task}</p>)}
        </div>
        <TodoList todoProps={this.state.todos}/>
      </div>
    );
  }
}

export default App;
