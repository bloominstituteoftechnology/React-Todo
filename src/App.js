import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const todoList = [
  {
    task: 'Create todo list',
    id: null,
    completed: false,
    className: false
  },
];

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      toDoList: todoList,
      inputText: '',
      id: '',
      completed: false,
      className: false
    };
  }

  handleChange = ev => {
    
    this.setState({
      inputText: ev.target.value
    });
  };

  addTodo = ev => {
    ev.preventDefault();
    this.setState({
      toDoList: [...this.state.toDoList, {
          task: this.state.inputText,
          id: Date.now(),
          completed: false,
          className: this.state.completed
        }],
        inputText: ''
    })
  }

  clearComplete = ev => {
    ev.preventDefault();
    this.setState({
      completedTasks: this.state.toDoList.filter( task => task.completed === true )
    })
    console.log(completedTasks);
  }

  toggleComplete = ev => {
    ev.preventDefault();
    this.setState( prevState => ({
      completed: !prevState.completed
    }));
  }

  render() {
    return (
      <div className="App">
        <TodoList 
          taskList={this.state.toDoList} 
          toggleComplete={this.toggleComplete} 
          className={this.state.completed}
        />
        <TodoForm 
          inputText={this.state.inputText}
          addTask={this.addTodo}
          clearComplete={this.clearComplete} 
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default App;
