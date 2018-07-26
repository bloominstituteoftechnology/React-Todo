import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';


class App extends React.Component {
  constructor () {
    super();
    this.state = {
      todos: [{ task: "Organize Garage", id: Date.now(), completed: false }, { task: "Bake Cookies", id: Date.now(), completed: false}],
      task: "",
    };
  }

  handleTaskChange = event => {
    this.setState({ task: event.target.value });
  }
  handleAddTodoSubmit = event => {
    event.preventDefault();
    const todos = this.state.todos.slice();
    todos.push({ task: this.state.task, id: Date.now(), completed: false });
    this.setState({ todos: todos });
  }
  // handleClearTodos
 
  render() {
    return (
      <div className="App">
        <h2>Todo List: MVP</h2>
        <TodoList todos= {this.state.todos} />
        <TodoForm 
          handleAddTodo={this.handleAddTodoSubmit}
          handleTask={this.handleTaskChange} 
        />
      </div>
    );
  }
}



export default App;
