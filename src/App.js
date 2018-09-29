//<App /> will hold all the data needed for this project. It will also be the container for your Todo Components.
//All of your application data will be stored here on <App />.
//All of your handler functions should live here on <App />.
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
  }

  handleClick = (todoId) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === todoId) {
          return {
            task: todo.task,
            id: todo.id,
            completed: !todo.completed
          }
        } else {
          return todo
        }
      })
    })
  }

  handleSubmit = (event) => {
    this.setState({
      todos: [...this.state.todos, {task: event.target.previousElementSibling.value, id: Date.now(), completed: false }]
    })
  }

  handleClear = () => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.completed === false)
    })
  }

  render() {
    return (
      <div className="container">
        <h2>PROCRASTINATION LIST :</h2>
        <div className="background-img"></div>
        <TodoList
          todos={this.state.todos}
          handleClick={this.handleClick}
        />
        <TodoForm
          submit={this.handleSubmit}
          clear={this.handleClear}
        />
      </div>
    );
  }
}

export default App;
