import React from 'react';
import './App.css';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
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
      list: ''
    }
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  handleInputChange = event => {
    this.setState({ list: event.target.value });
  };

  toggleCompleted = event => {
    let toDoList = this.state.todos.slice()
      .map(list => {
        if (list.id === event) {
          list.completed = !list.completed;
          return list;
        }
        return list;
      });

    this.setState({ todos: toDoList });
  }

  onSubmit = event => {
    event.preventDefault();
  }

  addButton = () => {
    const toDoList = this.state.todos.slice();

    toDoList.push({ task: this.state.list, completed: false, id: Math.random() });
    this.setState({ todos: toDoList, list: '' });
  }

  clearButton = () => {
    let toDoList = this.state.todos.slice().filter(list => !list.completed);
    this.setState({ todos: toDoList });
  }

  render() {
    return (
      <div className='app-container'>
        <h1>Todo List: MVP</h1>
        <TodoList
          toggleCompleted={this.toggleCompleted}
          toDoList={this.state.todos} />
        <TodoForm
          value={this.state.list}
          onSubmit={this.onSubmit}
          onChange={this.handleInputChange}
          clearButton={this.clearButton}
          addButton={this.addButton} />
      </div>
    );
  }
}

export default App;
