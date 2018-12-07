import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

import "./components/TodoComponents/Todo.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: "Organize Garage",
          id: 1528817077286,
          completed: false
        },
        {
          task: "Bake Cookies",
          id: 1528817084358,
          completed: false
        }
      ]
    };
  }

  createNewTodoObject = text => {
    const newTodo = {
      task: text,
      id: Date.now(),
      completed: false
    };

    const oldTodos = [...this.state.todos];

    oldTodos.push(newTodo);

    this.setState({ todos: oldTodos });
  };

  toggleCompleted = id => {
    let todos = [...this.state.todos];

    todos = todos.map(todo => {
      //easier approach from Sandbox example
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });

    this.setState({ todos: todos });

    //more advanced notes from Sneha
    /*
    const { todos } = this.state;

    const todoIndex = todos.findIndex(todo => todo.id === id);

    todos[todoIndex].completed = !todos[todoIndex].completed;

    const newTodos = [
      ...todos.slice(0, todoIndex), //items before edited object
      todos[todoIndex], //edited todo object itself
      ...todos.slice(todoIndex + 1) //items after edited todo object
    ];

    this.setState({ todos: newTodos });
    */
  };

  clear = () => {
    const cleared = [...this.state.todos];
    const todos = [];

    cleared.filter(todo => {
      if (todo.completed === false) {
        return todos.push(todo);
      }
      console.log(todos);
      return todos;
    });

    this.setState({ todos: todos });
  };

  render() {
    return (
      <div className="App">
        <h2>Actions</h2>
        <TodoList
          todos={this.state.todos}
          toggleCompleted={this.toggleCompleted}
        />
        <TodoForm
          createNewTodoObject={this.createNewTodoObject}
          toggleCompleted={this.toggleCompleted}
          clear={this.clear}
        />
      </div>
    );
  }
}

export default App;
