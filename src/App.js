import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
    
      todo: ''
    };
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  addTodo = e => {
    e.preventDefault();
    const todos = this.state.todos.slice();
    todos.push({ task: this.state.todo, completed: false, id: Date.now() });
    this.setState({ todos, todo: '' });
  };

  changeTodo = e => this.setState({ [e.target.name]: e.target.value });


    });
    this.setState({ todos });
  };



  render() {
    return (
      <div>
        <TodoList
        />
        <TodoForm
        />
      </div>
    );
  }
}

export default App;