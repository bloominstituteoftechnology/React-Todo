import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

import './components/TodoComponents/Todo.css';

class App extends React.Component {
  constructor() {
   super();
   this.state = {
    todos: [
      {
        task: 'Example Todo 1',
        id: 1528817077286,
        completed: false
      },
      {
        task: 'Example Todo 2',
        id: 1528817084358,
        completed: false
      }
    ]
   } 
  }

  addTask = (taskName) => {
    const newTodos = this.state.todos.slice();
    const randomId = `${Date.now()}${newTodos.length}`;
    newTodos.push({
      task: taskName,
      id: randomId,
      completed: false
    });
    this.setState({todos: newTodos});
    console.log('Task added');
  };

  setCompletedState = (id) => {
    const newTodos = this.state.todos.slice();
    let newState;
    newTodos.forEach(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        newState = todo.completed;
      }
    });
    this.setState({todos: newTodos});
    console.log('set completed state', newState);
    return newState;
  };

  render() {
    return (
      <div>
      <TodoList todos={this.state.todos} setCompletedState={this.setCompletedState} />
      <TodoForm addTask={this.addTask}/>
      </div>
    );
  }
}

export default App;
