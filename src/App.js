import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const todo = []

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todoList: todo
    }
  }

  addNewTodo = newTodoName => {
    const newState = {
      ...this.state,
      todoList: [
        ...this.state.todoList,
        {
          task: newTodoName,
          id: Date.now(),
          completed: false
        }
      ]
    }
    this.setState(newState);
  }

  toggleCompleted = id => {
    const newState = {
      ...this.state,
      todoList: this.state.todoList.map(task => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed
          }
        }
        return task;
      })
    }
    this.setState(newState);
  }

  clearCompleted = () => {
    const newState = {
      ...this.state,
      todoList: this.state.todoList.filter(task => {
        return !task.completed;
      })
    }
    this.setState(newState);
  }

  render() {
    return (
      <div className='App'>
        <div className='header'>
          <h1>Todo List</h1>
          <TodoForm addNewTodo={this.addNewTodo} />
        </div>
        <TodoList
          todo={this.state.todoList}
          toggleCompleted={this.toggleCompleted}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
