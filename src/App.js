import React from 'react';
import TodoList from "./components/TodoComponents/TodoList"
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
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
      task: ""
    }
  }

  addNewTask = event => {
    event.preventDefault();
    const newTask = {
      task: this.state.task,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTask],
      task: " "
    });
  };

  todoChange = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  toggleTask = id => {
    this.setState(prevTask => {
      return {
        todos: prevTask.todos.map(todo => {
          if (todo.id === id) {
            todo.completed = !todo.completed;
            return todo;
          } else {
            return todo;
          }
        })
      }
    })
  }

  clearTask = event => {
    event.preventDefault();
    this.setState(prevTask => {
      return {
        todos: prevTask.todos.filter(todo => !todo.completed)
      };
    });
  };


  render() {
    return (
      <div className="app">
        <h1>To Do List:</h1>
        <TodoList 
        todos={this.state.todos} 
        toggleTask={this.toggleTask} 
        />
        <TodoForm
        addNewTask={this.addNewTask}
        task={this.state.task}
        todoChange={this.todoChange}
        clearTask={this.clearTask}
        />
      </div>
    );
  }
}

export default App;
