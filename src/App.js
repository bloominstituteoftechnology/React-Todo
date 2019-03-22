// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state

import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import "./App.css";
import "../src/components/TodoComponents/Todo.css";

const todos = [
  {
    name: "Organize Garage", //{props.todo.name} in Todo.js
    id: 1528817077286,
    completed: false
  },
  {
    name: "Bake Cookies",
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    //state is the BRAIN of the tree component
    this.state = {
      todos //same as === todos: todos
    };
  }
  //we MUST declare this function in App.js 'cause DATA lies here in the parent component
  addTodo = (e, todo) => {
    //console.log("fired");
    e.preventDefault();
    const newTodo = {
      name: todo,
      id: Date.now(),
      completed: false //always initialize with false here
    };
    //creating a brand new array
    this.setState({
      //copy of array
      todos: [...this.state.todos, newTodo]
    });
  };

  toggleTodo = todoId => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todoId === todo.id) {
          return { ...todo, completed: !todo.completed }; //same as...todo === name:todo.name, id:todo.id, etc.
        }
        return todo;
      })
    });
  };

  render() {
    return (
      <div className="app">
        <div className="title">
          <i className="fa fa-tasks fafa" />
          My To-do List
        </div>

        <TodoForm
          //passing from addTodo func
          addTodo={this.addTodo}
        />
        <div>
          <TodoList
            //passing from this.state as props
            todos={this.state.todos}
            //passing down as a prop from toggleTodo func
            toggleTodo={this.toggleTodo}
          />
        </div>
      </div>
    );
  }
}

export default App;
