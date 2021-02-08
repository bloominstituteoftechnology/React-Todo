import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todos: [{task:"Learn React", completed:false}]
    }
  }

  addTodo = (todoText) => {
    this.setState({
      todos: [...this.state.todos, {task:todoText, completed:false}]
    })
  }

  toggleCheck = (todoText) => {
    this.setState({
      todos: this.state.todos.map(item => {
        if (item.task === todoText) {
          return {task:todoText, completed:!item.completed}
        } else {
          return item
        }
      })
    })
  }

  filterCompleted = () => {
    this.setState({
      todos: this.state.todos.filter(item => !item.completed)
    })
  }
  
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.todos} toggleCheck={this.toggleCheck} />
        <TodoForm submit={this.addTodo} filterCompleted={this.filterCompleted} />
      </div>
    );
  }
}

export default App;
