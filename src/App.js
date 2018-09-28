import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    //input storage
    this.state = {
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

      newTask: ''
    };
  }

  handleInput = (e) => {
    this.setState({
      newTask: e.target.value
    })
  }

  handleClick = (e) => {
    e.preventDefault();
    const newObj = {
      task: this.state.newTask,
      id: Date.now(),
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newObj],
      newTask: ''
    })
  }

  handleComplete = (chosenId) => {
    this.setState ({
      todos: this.state.todos.map(x => {
        if (x.id === chosenId) {
          return {
            task: x.task,
            id: x.id,
            completed: !x.completed
          }
        }
        else {
          return x
        }
      })
    })
  }

  handleClear = (e) => {
    e.preventDefault();
    this.setState ({
      todos: this.state.todos.filter (x => x.completed === false)
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.todos} handleComplete={this.handleComplete}/>
        <TodoForm value={this.state.newTask} handleInput={this.handleInput} handleClick = {this.handleClick} handleClear = {this.handleClear}/>
      </div>
    );
  }
}

export default App;
