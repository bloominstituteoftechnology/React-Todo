import React from 'react';
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  state = {todos: [
    {id: 1, task: "blah", completed: false},
    {id: 2, task: "foo", completed: false},
    {id: 3, task: "bar", completed: false}
  ]};

  addTodo = todo => {
    this.setState({todos: [...this.state.todos, todo]})
  }

  toggleCompleted = id => {
    const todosList = [...this.state.todos];
    todosList.forEach(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      }
    })
    this.setState({todos: todosList});
  }

  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted} />
        <TodoForm addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
