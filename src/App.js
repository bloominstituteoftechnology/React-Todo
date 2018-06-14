import React from 'react';
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change 

  constructor() {
    super();
    this.state = {
      // an array of objects/list of todos
      heading: "My React To-do List",
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
      todo: ""
    };
  }

// this lets us type in the input box
  inputNewTodo = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

// this adds the new todo to the list
  addTodo = event => {
    event.preventDefault()
    const todos = this.state.todos.slice();
    todos.push({ 
      task: this.state.todo, // user input
      completed: false, // default to false
      id: Date.now() }); // time stamp
    this.setState({ todos, todo: "" });
  };

  // this toggles complete todos
  toggleCompleteTodos = id => {
    let todos = this.state.todos.slice();
    todos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });
    this.setState({ todos });
  };
  
  // this clears todos
  clearTodos = event => {
    event.preventDefault()
    let todos = this.state.todos.slice();
    todos = todos.filter(todo => !todo.completed);
    this.setState({ todos });
  };

 
  render() {

    let divStyles = {
      color: 'white',
      backgroundColor: '#222',
      margin: '0 auto',
      width: '50vw',
      height: '50vh',
      paddingTop: '5px',
      paddingBottom: '10px',
      borderRadius: '10px'
  }

    let headingStyles = {
      color: 'white',
      backgroundColor: '#5FBE2E',
      padding: '5px',
      margin: '10px auto 5px auto',
      textAlign: 'center'

  }
    
let listStyles = {
      overflowY: 'scroll'
}

    return (
      <div style={divStyles}>
        <h2 style={headingStyles}>{this.state.heading}</h2>
          <TodoForm 
          value={this.state.todo}
          typeInputNewTodo={this.inputNewTodo}
          clickAddTodo={this.addTodo}
          clickClearTodos={this.clearTodos} // new
          />
        <TodoList
       
       clickToggleComplete={this.toggleCompleteTodos} // new
        todos=
        {this.state.todos} />
      </div>
    );
  }
}

export default App;
