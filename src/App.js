import React, { useState } from 'react';
// import components
import TodoSearch from './components/TodoSearch';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

// --------------------------- Initial States ---------------------------
const todos = [
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
]


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todos,
      todoSearch: ""
    }
  }

  // ---------------------------- Helper Functions ------------------------
addTodo = (todoName, e) => {
  e.preventDefault();
  const newTodo = {
    id: Date.now(), // simple way to create a UID
    name: todoName,
    completed: false
  }
  // add new todo to todos array
  this.setState({
    ...this.state,
    todos: [...this.state.todos, newTodo]
  })
} // adds a new todo to the todos array

toggleCompleted = (todoId) => {
  console.log("toggling", todoId);
  // iterate through the todos array (this.state.todos) to toggle only the todo in question
  const newTodos = this.state.todos.map(todo => {
    if (todoId === todo.id) { 
      return {
        ...todo,
        completed: !todo.completed
      }
    }
    else { return todo; }
  })
  // update "todos" state value to this new array
  this.setState({
    ...this.state,
    todos: newTodos
  })
} // toggles todo to completed


clearCompleted = () => {
  console.log('clearing completed todos');
  // if the todo.completed is true, then filter it out of the this.state.todos array
  this.setState({
    ... this.state,
    todos: this.state.todos.filter(todo => !todo.completed)
  })
}


searchTodos = (todoSearch) => {
  console.log("searchTodos has fired");
}
// ----------------------------- Event Handlers -------------------------
// handleClick = () => {
//   this.setState({
//     ...this.state,
//     todo: "todo one"}) // this copies the object, so it isn't mutated
// }
// ------------------------------- Side Effects -------------------------

  render() {
    return (
      <div className="App">

        <h2>Welcome to your Todo App!</h2>

        <TodoSearch todos={this.state.todos} todoSearch={this.todoSearch}/>

        <TodoList toggleCompleted={this.toggleCompleted} todos={this.state.todos}/>

        <TodoForm addTodo={this.addTodo} clearCompleted={this.clearCompleted}/>
   
      </div>
    );
  }
}

export default App;

// todos={this.state.todos} 