import React from 'react';
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

const todoData = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake 12 Cookies ',
    id: 1528817084358,
    completed: true
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state ={
      todos: todoData,
    };
  }

  filterCompleted = () => {
    this.setState({
      todos: this.state.todos.filter(todo => {
        return !todo.completed;
      })
    });
  }

  toggleCompleted = (id) => {
    console.log("toggle completed", id);
    this.setState({
      todos:
    this.state.todos.map(todo => {
      if (id === todo.id) {
      return {...todo, completed: !todo.completed};
      } else {
        return todo;
      }
      })
    });
  }

addTodo = task => {
  this.setState({
    todos: [...this.state.todos, {
      task: task,
      id: Date.now(),
      completed: false
    }]
  });
}


  render() {
    console.log(this.state);
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.todos}
        toggleCompleted={this.toggleCompleted}
        />
        <TodoForm addTodo={this.addTodo} filterCompleted={this.filterCompleted}/>
      </div>
    );
  }
}

export default App;
