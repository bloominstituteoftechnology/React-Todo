import React from 'react';
import ToDoForm from './components/TodoComponents/TodoForm';
import ToDoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: [],
    };
  }

  addToDo = e => {
    e.preventDefault();
    const todos = this.state.todos;
    todos.push({ task: this.state.todo, completed: false, id: Date.now() });
    this.setState({ todos, todo: ''});
  };

  changeToDo = e => this.setState({ [e.target.name]: e.target.value });
  
  render() {
    return (
      <div>
        <h2>To Do List</h2>
        <ToDoList todos={this.state.todos} />
        <ToDoForm 
        value={this.state.todo}
        handleToDoChange={this.changeToDo}
        handleAddToDo={this.addToDo}
        />
      </div>
    );
  }
}

export default App;