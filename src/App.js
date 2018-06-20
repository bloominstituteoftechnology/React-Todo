import React from 'react';
import './App.css';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
class App extends React.Component {
    constructor() {
    super();
    this.state = {
      todos: [
        {
          task: 'Get bloodwork done',
          id: 1,
          completed: false
        },
        {
          task: 'Make Dentist appointment',
          id: 2,
          completed: false
        },
        {
          task: '2 hours of Codewars JavaScript',
          id: 3,
          completed: false
        },
      ],
      todo: ""
    };
  }
  addItem = e => {
    e.preventDefault();
    const todos = this.state.todos.slice();
    todos.push({
      task: this.state.todo, id: Date.now(), completed: false
    });
    this.setState({todos, todo: ""});
  };

  changeItem = e => this.setState({[e.target.name]: e.target.value});

  clearCompleted = e => {
    e.preventDefault();
    let todos = this.state.todos.slice();
    todos = todos.filter(todo => !todo.completed);
    this.setState({todos});
  };

  toggleCompleted = id => {
    let todos = this.state.todos.slice();
    todos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      }
      else {
        return todo;
      }
    });
    this.setState({todos});
  };


  render() {
    return (
      <div className="container">
      <img className="doge" src={require("./components/TodoComponents/dogebread.png")} alt="doge-bread"/>
      <h2>To-do List</h2>
      <TodoList handleToggleComplete={this.toggleCompleted}
      todos={this.state.todos}/>
      <TodoForm value={this.state.todo}
      handleAddItem={this.addItem}
      handleChangeItem={this.changeItem}
      handleClearCompleted={this.clearCompleted}
      />
      </div>
    );
  }
}

export default App;