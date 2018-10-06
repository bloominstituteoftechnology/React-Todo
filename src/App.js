import React from 'react';
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'
import './components/TodoComponents/Todo.css'

class App extends React.Component {
  constructor () {
    super();
  
  // you will need a place to store your state in this component.
    this.state = {
      todos: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ],
      input: " "
    };
  }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  //Handlers


  //Allows for text to be added to input
  changeInputHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };


  //Adds text to todo list displayed onscreen
  addTodoHandler = event => {
    event.preventDefault();
    const todos = this.state.todos.slice();
    todos.push({task: this.state.input, completed: false, id: Date.now()});
    this.setState({ todos: todos, input: " " });
  };

  //Indicates completed task
  toggleTodoCompleted = id => {
    let todos= this.state.todos.slice();
    todos = todos.map(input => {
      if (input.id === id) {
        input.completed = !input.completed;
        return input;
     } else {
        return input;
      }
    }); 
    this.setState({ todos: todos });
 };

  //Removes text from todo list displayed onscreen
  clearCompletedHandler = event => {
    event.preventDefault();
    let todos = this.state.todos.slice();
    todos = todos.filter(input => !input.completed);
    this.setState({ todos });
  };

  render() {
    return (
      <div className="app">
        <h1 className="title">Git-R-Done!</h1>
        <div className="list-container">
          <TodoList 
            todos={this.state.todos}
            completedTodos={this.toggleTodoCompleted}
          />
        </div>

        <div className="form-container">
          <TodoForm 
            value={this.state.input}
            changeInputHandler={this.changeInputHandler}
            input={this.state.input}
            addTodoHandler={this.addTodoHandler}
            clearCompletedHandler={this.clearCompletedHandler}
          />
        </div>

      </div>
    );
  }
}

export default App;

