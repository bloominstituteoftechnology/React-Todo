import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import './App.css';
import TodoHeader from './components/TodoComponents/TodoHeader';
import TodoMessage from './components/TodoComponents/TodoMessage';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      todos: [],
      todoStyle: 'Todo',
      toDoCompleteStyle: { textDecoration: 'line-through' },
      showMessage: { display: 'block' }
    };
  }

  handleNewToDo = e => {
    e.preventDefault();
    // !this.state.input is equivalent to this.state.input === '' (falsey)
    if (!this.state.input) {
      this.setState({ invalidInput: true });
    } else {
      const task = {
        // slice creates a copy of this.state.input
        task: this.state.input.slice(),
        id: Date.now(),
        completed: false
      };

      // copy todos and add task to todos
      const todos = [...this.state.todos, task];

      // add task to todo list
      // todos.push(task);

      this.setState({ todos: todos, input: '' });

      // Local Storage
      localStorage.setItem('todos', JSON.stringify(todos));
      localStorage.setItem('input', '');
    }
  };

  handleInputChange = e => {
    // if warning message is showing - hide it!
    // eslint-disable-next-line
    this.state.invalidInput ? this.setState({ invalidInput: false }) : null;
    this.setState({ input: e.target.value });
    localStorage.setItem('input', e.target.value);
  };

  // map over existing array with conditional
  toggleCompleteTask = e => {
    const newTodos = this.state.todos.map(todo => {
      if (String(todo.id) === e.target.id) {
        return {
          ...todo,
          completed: !todo.completed
        };
      } else {
        return todo;
      }
    });
    this.setState({ todos: newTodos });
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  handleCompletedTasks = e => {
    e.preventDefault();
    const removeCompleted = this.state.todos.filter(todo => !todo.completed);
    this.setState({ todos: removeCompleted });

    // Local Storage
    localStorage.setItem('todos', JSON.stringify(removeCompleted));
  };

  // retrive todos from local storage
  hydrateStateWithLocalStorage() {
    // for all items in state
    for (let key in this.state) {
      // if the key exists in localStorage
      if (localStorage.hasOwnProperty(key)) {
        // get the key's value from localStorage
        let value = localStorage.getItem(key);
        // parse the localStorage string and setState
        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch (e) {
          // handle empty string
          this.setState({ [key]: value });
        }
      }
    }
  }

  // React.Component method
  componentDidMount() {
    this.hydrateStateWithLocalStorage();
  }

  render() {
    return (
      <div className="App">
        <TodoHeader />
        <TodoForm
          handleNewToDo={this.handleNewToDo}
          handleInputChange={this.handleInputChange}
          handleCompletedTasks={this.handleCompletedTasks}
          input={this.state.input}
        />
        <TodoMessage
          inlineStyle={this.state.invalidInput ? this.state.showMessage : null}
        />
        <TodoList
          todos={this.state.todos}
          toggleCompleteTask={this.toggleCompleteTask}
          style={this.state.todoStyle}
          inlineStyle={this.state.toDoCompleteStyle}
        />
      </div>
    );
  }
}

export default App;
