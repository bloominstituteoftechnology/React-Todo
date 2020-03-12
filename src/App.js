import React from 'react';

import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      todos: [
        { id: 1,
          description: 'Initial todo'},
        { id: 2,
          description: 'another todo'},
      ]
    }
  }

  addTodo = todoDescription => {
    this.setState({
      todos: [...this.state.todos, {
        id: (Math.random() * Math.random()).toString(9).substr(2, 9),
        description: todoDescription
      }]
    });
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.todos} />
        <TodoForm addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
