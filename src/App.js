import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm'
import Todo from './components/TodoComponents/Todo'

class App extends React.Component {
  constructor () {
    super();
  
  // you will need a place to store your state in this component.
    this.state = {
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
      input: " "
    };
  }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  //Handlers

  changeInputHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addTodoHandler = () => {
    const todos = this.state.todos.slice();
    todos.push({task: this.state.input, completed: false, id: Date.now()});
    this.setState({ todos: todos, input: " " });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm />
        <Todo dailyTodos={this.state.todos} />
      </div>
    );
  }
}

export default App;
