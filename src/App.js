import React from 'react';
import ToDoForm from './components/TodoComponents/TodoForm';
import ToDoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    };
  }

  addToDo = e => {
    e.preventDefault();
    const todos = this.state.todos;
    todos.push({ task: this.state.todo, completed: false, id: Date.now() });
    this.setState({ todos, todo: ''});
  };

  changeToDo = e => this.setState({ [e.target.name]: e.target.value });

  toggleTodoComplete = id => {
    let todos = [...this.state.todos];

    todos = todos.map(todo => {
      if (todo.id !== id) {
        return todo;
      } else {
        todo.completed = !todo.completed;
        return todo;
      }
    });
    console.log('new todos array',todos);

    this.setState({ todos });
};
  
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