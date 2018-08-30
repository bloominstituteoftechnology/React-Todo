import React from 'react';
import TodoList from './components/TodoComponents/TodoList.js';
import TodoForm from './components/TodoComponents/TodoForm.js';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: 'Sample task',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Sample task 2',
          id: 1528817084358,
          completed: true
        }
      ],
      inputText: ''
    };
  }

  inputChanged = event => {
    this.setState({
      inputText: event.target.value
    });
  };

  submit = event => {
    event.preventDefault();
    if (this.state.inputText) {
      let todos = {
        todos: [...this.state.todos, {
          task: this.state.inputText,
          id: Date.now(),
          completed: false
        }],
        inputText: ''
      };
      this.setState(todos);
    }
  };

  keyPress = event => {
    if(event.key === 'Enter'){
      this.submit();
    }
  };

  completedToggle = (event) => {
    let todos = {
      todos: this.state.todos.map( todo => { 
        if (todo.id === event.target.key) {
          todo.completed ? todo.completed = false : todo.completed = true;
        }
        return todo;
      }),
      inputText: this.state.inputText
    };
    this.setState(todos);
  }

  clear = (event) => {
    event.preventDefault();
    this.setState({
      todos: this.state.todos.filter(todo => todo.completed === false)
    });
  };

  render() {
    return (
      <div className='app-container'>
        <h1>Todo List</h1>
        <TodoList todos={this.state.todos}
                  completedToggle={this.completedToggle}/>

        <TodoForm inputText={this.state.inputText}
                  inputChanged={this.inputChanged}
                  keyPress={this.keyPress}
                  submit={this.submit}
                  clear={this.clear}/>
      </div>
    );
  }
}

export default App;
