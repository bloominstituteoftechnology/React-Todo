import React from 'react';
import shortid from "shortid";
import TodoList from "./components/TodoComponents/TodoList.js";

const todos = [
  {
    task: "Fix ceiling light",
    id: 1,
    completed: false
  },
  {
    task: "Eat homemade tamales",
    id: 2,
    completed: false
  },
  {
    task: "Play videogames with friends",
    id: 3,
    completed: false
  },
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todos
    };
  }

  clearTodos = event => {
    event.preventDefault();
    this.setState({
      todos: this.state.todos.filter(todo => {
        return !todo.complete;
      })
    });
  }


  render() {
    return (
      <div>
        <h2>Todolist</h2>
        <TodoList
          TodoList={this.state.todos}
          toggleComplete={this.toggleComplete}
          clearTodos={this.clearTodos}/>
      </div>
    );
  }
}

export default App;
