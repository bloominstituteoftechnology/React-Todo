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
      heading: "To-do List MVP",
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
    const todos = this.state.todos.slice();
    todos.push({ task: this.state.todo, completed: false, id: Date.now() });
    this.setState({ todos, todo: "" });
  };

  render() {
    
    return (
      <div>
        <h2>{this.state.heading}</h2>
          <TodoForm 
          value={this.state.todo}
          typeInputNewTodo={this.inputNewTodo}
          clickAddTodo={this.addTodo}
          />
        <TodoList myTodos=
        {this.state.todos} />
      </div>
    );
  }
}

export default App;
