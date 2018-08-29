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
      todos: [],
      inputText: '',
    }
  }


  changeInput = event => {
    this.setState({
      inputText: event.target.value
    })
  }

  addTodo = event => {
    event.preventDefault();
    this.state.todos.map(todo => {
      if(todo.task === this.state.inputText) {
        alert(`Already have ${this.state.inputText} as a task.`)
      }
    });
    if(this.state.inputText) {
      this.setState({
        todos: [...this.state.todos, {
          task: this.state.inputText,
          id: Date.now(),
          complete: false,
        }]
      })
    }
    this.setState({inputText: ''})
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList propTodos={this.state.todos} />
        <TodoForm 
          inputText={this.state.inputText}
          changeInput={this.changeInput}
          addTodo={this.addTodo}

        />
      </div>
    );
  }
}

export default App;
