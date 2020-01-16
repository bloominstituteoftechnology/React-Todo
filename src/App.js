import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

import './App.css'

const tasks = [];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  state = {
    todoList: tasks
  };

  addNewTask = newTaskName => {
    const newState = {
      ...this.state, 
      todoList: [
        ...this.state.todoList,
        { 
          task: newTaskName, 
          id: Date.now(), 
          completed: false }
      ]
    };
    this.setState(newState);
  };

  toggleCompleted = id => {
    const newState = {
      ...this.state,
      todoList: this.state.todoList.map(item => {
        if(item.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    };
    this.setState(newState);
  };

  clearCompleted = () => {
    const newState = {
      ...this.state,
      todoList: this.state.todoList.filter(item => {
        return !item.completed;
      })
    };
    this.setState(newState);
  };

  render() {
    return (
      <div className='app'>
        <header>
          <h1>Welcome to your Todo App!</h1>
        </header>
        <section>
          <TodoForm 
            addNewTask={this.addNewTask}
            clearCompleted={this.clearCompleted} 
          />
        </section>

        <section>
          <TodoList 
            todoList={this.state.todoList}
            toggleCompleted={this.toggleCompleted}
          />
        </section>
      </div>
    );
  }
}

export default App;
