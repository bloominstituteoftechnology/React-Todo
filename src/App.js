import React from 'react';
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  state = {todos: [
    {id: Date.now(), task: "blah", completed: false},
    {id: Date.now(), task: "foo", completed: false},
    {id: Date.now(), task: "bar", completed: false}
  ]};

  addTodo = todo => {
    console.log("addTodo");
    const newTodos = this.state.todos.slice();
    newTodos.push(todo);
    this.setState({todos: newTodos});
  }

  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} />
        <TodoForm addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
