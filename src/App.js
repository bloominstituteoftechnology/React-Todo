import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();

    this.state = {
      todos: [
        {
          task: "coding",
          id: 345435,
          complete: false
        },
        {
          task: "eat",
          id: 345436,
          complete: false
        }
      ],
      inputText: '',
    }
  }

  changeInput = event => {
    this.setState({
      inputText: event.target.value
    })
  }

  addTodo = event => {
    this.setState
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList propTodos={this.state.todos} />
        <TodoForm 
          changeInput={this.changeInput}
        />
      </div>
    );
  }
}

export default App;
