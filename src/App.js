import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const todoArray = [
  {
      task: 'Drop Drycleaning',
      id: 1528817077286,
      completed: false
  },
  {
      task: 'Pack Suitcase',
      id: Date.now(),
      completed: false
  },
  {
      task: 'Book Hotel',
      id: 1528817077285,
      completed: false
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todos: todoArray,
      todo: ''
    }
  }

  addTodo = event => {
    event.preventDefault();
    const todos = this.state.todos.slice();
    todos.push({ task: this.state.todo, completed: false, id: Date.now() });
    this.setState({ todos, todo: '' });
  }

  todoInput = event => {
    this.setState({ todo: event.target.value });
  }

  toggleCompleted = (id) => {
    console.log(id);
    this.setState(prevState => {
      return {
        todos: prevState.todos.map(todo => {
          if (id === todo.id) {
            return {
              ...todo, completed: !todo.completed
            }
          } else return todo
        })
      }
    });
  }

  clearCompleted = event => {
    event.preventDefault();
    let todos = this.state.todos.slice();
    todos = todos.filter(todo => !todo.completed);
    this.setState({ todos });
  }

  render() {
    return (
      <div>
        <h3><TodoList todos={this.state.todos} toggleHandler={this.toggleCompleted} /></h3>
        <TodoForm value={this.state.todo} handlerTodoInput={this.todoInput} handlerAddTodo={this.addTodo} clearCompletedHandler={this.clearCompleted} />
      </div>
    );
  }
}

export default App;
