import React from 'react';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const todo = [
  {
    name: 'Make Bed',
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
      todo: todo
    };
  };

  addTodo = todoName => {
    this.setState({
      todo: [...this.state.todo, {name: todoName, id: Date.now(), completed: false}]
    });
  };

  toggleTodo = todoId => {
    this.setState({
      todo: this.state.todo.map(todo => {
        if(todo.id === todoId){
          return {
            ...todo,
            completed: todo.completed
          };
        };
        return todo;
      })
    });
  };

  clearPurchased = () => {
    this.setState({
      todo: this.state.todo.filter(todo => {
        return !todo.purchased
      })
    });
  };

  render() {
    return (
      <div>
        <h2>My Personal To-Do List</h2>
        <TodoForm clearPurchased={this.clearPurchased} addTodo={this.addTodo} />
        <TodoList todo={this.state.todo} toggleTodo={this.toggleTodo} />
      </div>
    );
  }
}

export default App;
