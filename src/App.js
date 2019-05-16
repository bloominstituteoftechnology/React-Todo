import React from 'react';
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";
import "./components/TodoComponents/Todo.css";

const todos = [
  {
    task: 'pick up kids',
    id: 80110314,
    completed: false
  },
  {
    task: 'turn in report',
    id: 93016112,
    completed: false
  },
  {
    task: 'remind dad about vacation',
    id: 25855911,
    completed: false
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos
    };
  };
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  toggleTodo = todoId => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todoId === todo.id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    });
  };

  addTodo = (e, todo) => {
    e.preventDefault();
    const newTodo = {
      task: todo,
      id: Date.now(),
      complete: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };

  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      todos: this.state.todos.filter(todo => !todo.completed)
    });
  };

  render() {
    return (
      <div className="App">
      <div className="header">
        <h1>TaskTrack.</h1>
        <TodoForm addTodo={this.addTodo} />
        </div>
        <section className='app-info'>
          <p>Track your tasks on the go with TaskTrack.</p>
        </section>
        <TodoList 
          todos={this.state.todos}
          toggleTodo={this.toggleTodo}
          clearCompleted={this.clearCompleted}
        />
        <section className='app-credit'>
          <p>Follow me on Github @myke47</p>
        </section>
        <footer>
        <p>Created in React App</p>
        </footer>
      </div>
    );
  }
}

export default App;
