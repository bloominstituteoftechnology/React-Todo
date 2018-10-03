import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      todos: [
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
      ],
      todoStyle: 'Todo'
    };
  }
  handleNewToDo = e => {
    e.preventDefault();
    const task = {
      task: this.state.input,
      id: Date.now(),
      completed: false
    };

    this.setState({ todos: [...this.state.todos, task], input: '' });
  };

  handleInputChange = e => {
    this.setState({ input: e.target.value });
  };

  toggleCompleteTask = e => {
    this.state.todos.forEach(todo => {
      if (String(todo.task) === e.target.textContent) {
        todo.completed = !todo.completed;
        e.target.classList.toggle('Complete');
      }
    });
  };

  handleCompletedTasks = e => {
    e.preventDefault();
    // const completed = this.state.todos.filter(todo => todo.completed);
    this.setState({ todos: this.state.todos });
    // console.log(completed);
  };

  render() {
    return (
      <div className="App">
        <TodoForm
          handleNewToDo={this.handleNewToDo}
          handleInputChange={this.handleInputChange}
          handleCompletedTasks={this.handleCompletedTasks}
          input={this.state.input}
        />
        <TodoList
          todos={this.state.todos}
          toggleCompleteTask={this.toggleCompleteTask}
          style={this.state.todoStyle}
        />
      </div>
    );
  }
}

export default App;
