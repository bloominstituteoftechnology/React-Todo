import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import './App.css';

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
          completed: false,
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false,
        },
      ],
      inputText: '',
    };
  }

  handleInput = (event) => {
    this.setState({ inputText: event.target.value });
  };

  addTodo = (event) => {
    event.preventDefault();
    console.log('test add todo');
    if (this.state.inputText) {
      this.setState({
        todos: [
          ...this.state.todos,
          {
            task: this.state.inputText,
            id: Date.now(),
            completed: false,
          },
        ],
        inputText: '',
      });
    }
  };

  removeCompleted = (event) => {
    event.preventDefault();
    console.log('test removeCompleted');
    const currentTodos = [...this.state.todos];
    console.log('currentTodos', currentTodos);
    const newTodos = currentTodos.filter((todo) => todo.completed === false);
    console.log('newTodos', newTodos);
    this.setState({ todos: newTodos });
  };

  removeAll = (event) => {
    event.preventDefault();
    console.log('test remove all');
    this.setState({
      todos: [],
      inputText: '',
    });
  };

  toggleComplete = (event) => {
    event.preventDefault();
    // console.log('test toggle complete');
    // console.log('target', event.target);
    const currentTodos = [...this.state.todos];
    // console.log('todos array of objects', currentTodos);
    currentTodos.forEach((todo) => {
      // console.log('todo id', todo.id);
      // console.log('event target id', event.target.id);
      if (todo.id.toString() === event.target.id) {
        todo.completed = !todo.completed;
        if (todo.completed === true) {
          // console.log('event target', document.getElementById(event.target.id));
          document.getElementById(event.target.id).style.textDecoration =
            'line-through';
        } else {
          document.getElementById(event.target.id).style.textDecoration =
            'none';
        }
      }
      // console.log(todo.completed);
    });
    this.setState({ todos: currentTodos });
    // console.log(this.state);
  };

  render() {
    return (
      console.log('render'),
      (
        <div className="todo-list-component">
          <TodoList
            todos={this.state.todos}
            toggleComplete={this.toggleComplete}
          />
          <TodoForm
            addTodo={this.addTodo}
            removeCompleted={this.removeCompleted}
            removeAll={this.removeAll}
            inputText={this.state.inputText}
            handleInput={this.handleInput}
          />
        </div>
      )
    );
  }
}

export default App;
