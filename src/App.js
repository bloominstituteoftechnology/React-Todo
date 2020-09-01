import React from 'react';
import "./components/Todo.css";

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor () {
    super();

   this.state = {
     todoList: [],
    //  toggleTask: () => {},
    //  task: "",

   }
  }

  toggleTask = (clickedTodoId) => {
    this.setState({
      todoList: this.state.todoList.map((todo) => {
        if (todo.id === clickedTodoId) {
          return {
            ...todo,
            completed: !todo.completed
          }
        } else {
          return todo
        }
      })
    })
  }


  addTask = (taskName) => {
    const newTask = {
      task: taskName,
      id: new Date(),
      completed: false,
    }
    this.setState({
      todoList: [...this.state.todoList, newTask]
    })
  }


  removeTask = () => {
    this.setState({todoList: this.state.todoList.filter(todo => !todo.completed)})
}


  render() {
    return (
      <div className="App">
        <div className="header">
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTask={this.addTask} removeTask={this.removeTask} />
        </div>
        <TodoList
          todoList={this.state.todoList}
          toggleTask={this.toggleTask} />
      </div>
    );
  }
}

export default App;
