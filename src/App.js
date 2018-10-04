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

  handleTaskChange = e => {
    this.setState({task: e.target.value})
  }

  handleAddToSubmit = e => {
    e.preventDefault();
    const todo = this.state.todo.slice();
    todo.push({task: this.state.task, id: Date.now(), completed: false});
    this.setState({todo: todo, task: ""})
  }
  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <TodoList tasks={this.state.todo} />
        <TodoForm addTask={this.handleAddToSubmit} handleChange={this.handleTaskChange}/>

      </div>
    )
  }
}


export default App;
