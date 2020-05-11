
import React from 'react';

import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'



const todo = [
  {
    task: 'buy facemask',
    id: 1,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todo
    };
  }
  addTodo = (event, task) => {
    event.preventDefault();

    const newTodo = {
      task: task,
      id: Date.now(),
      completed: false
    };

    this.setState({
      todo: [...this.state.todo, newTodo]
    })
  }

  toggleItem = todoId => {
    console.log(todoId)
    this.setState({
      todo: this.state.todo.map(todo => {
        if (todoId === todo.id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    });
  }

  clearCompleted = event => {
    event.preventDefault();

    this.setState({
      todo: this.state.todo.filter(todo => !todo.completed)
    })
  }

  render() {
    return (
      <div className='App'>
        <div className='header'>
          <h2>To-do List</h2>
        </div>
        <TodoList
          todo={this.state.todo}
          toggleItem={this.toggleItem}
        />
        <TodoForm
          addTodo={this.addTodo}
          clearCompleted={this.clearCompleted} />
      </div>
    );
  }
}
export default App;

