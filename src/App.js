import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  state = {
    todos: [
      {
        task: 'Organize Garage',
        id: 1528817077286,
        completed: false
      },
      {
        task: 'Bake Cookies',
        id: 1528817084358,
        completed: false
      }
    ],
  }

  addTodoHandler = (event) => {
    const todos = this.state.todos.slice();
    const input = document.querySelector('input');
    const text = input.value;
    todos.push({
      task: text,
      id: Date.now(),
      completed: false
    });
    this.setState({todos: todos});
    input.value = "";
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.todos}/>
        <TodoForm addTodo={this.addTodoHandler}/>
      </div>
    );
  }
}

export default App;
