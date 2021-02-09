import React from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor () {
    super();
    this.state = {
      todos: [
        {
          task: "Get Lit",
          id: 0,
          completed: false,
        },
        {
          task: "Win at Life",
          id: 1,
          completed: false,
        }
      ],
    }
  }

  toggleComplete = () => {

    let newTodo = {
      task: "",
    }

    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm />
        <br />
        <TodoList todos={this.state.todos} toggleComplete={this.toggleComplete}/>
      </div>
    );
  }
}

export default App;
