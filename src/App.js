import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm"


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: [{task: 'clean basement', id: Date.now(), completed: false}],
      task: ""
    }
  }

  toggleTodoComplete = id => {
    let todo = this.state.todo.slice();
    todo = todo.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });
    this.setState({todo});
  }

  handleTaskChange = e => {
    this.setState({task: e.target.value})
  }

  handleAddToSubmit = e => {
    e.preventDefault();
    const todo = this.state.todo.slice();
    todo.push({task: this.state.task, id: Date.now(), completed: false});
    this.setState({todo: todo, task: ""})
  }

  clearCompletedTodos = e => {
    e.preventDefault();
    let todo = this.state.todo.slice();
    todo = todo.filter(todo => !todo.completed);
    this.setState({todo})
  }

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <TodoList tasks={this.state.todo} handleToggleComplete={this.toggleTodoComplete}/>
        <TodoForm 
        addTask={this.handleAddToSubmit} 
        handleChange={this.handleTaskChange}
        value={this.state.task}
        handleClearTodos={this.clearCompletedTodos}/>

      </div>
    )
  }
}


export default App;
