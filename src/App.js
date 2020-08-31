import React from 'react';
import TodoForm from "./components/TodoForm";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todos: "",
      toggleCompleted: () => {},
      name: ""
    }
  }


  toggleCompleted = clickedTodoId => {
    this.setState({
      todos: this.state.todos.map(todos => {
        if(todos.id === clickedTodoId) {
          return {
            ...todos,
            completed: !todos.completed
          };
        } else {
          return todos;
        }
      })
    })
  }



  addTodo = todoName => {
    const newTodo = {
      name: todoName,
      id: new Date(),
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
