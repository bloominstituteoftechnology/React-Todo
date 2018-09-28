import React from 'react';
import Todo from './components/TodoComponents/Todo';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      todoData: [],
      textField: ''
    };
  }

  addTodo = event => {
    console.log('clicked');
    event.preventDefault();
    if (this.state.textField) {
      this.setState({
        todoData: [
          ...this.state.todoData,
          { task: this.state.textField, id: Date.now(), completed: false }
        ],
        textField: ''
      });
    }
  };

  handleInput = event => {
    this.setState({ textField: event.target.value });
  };

  toggleComplete = event => {
    this.setState({
      todoData: this.state.todoData.map(item => {
        if (item.id == event.target.id) {
          return {
            task: item.task,
            id: item.id,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    });
  };

  clearTodos = () => {
    this.setState({
      todoData: this.state.todoData.filter(item => {
        if (!item.completed) {
          return item;
        }
      })
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <h1>Todo List: MVP</h1>
        <TodoList data={this.state} toggleComplete={this.toggleComplete} />
        <TodoForm
          addNew={this.addTodo}
          handleInput={this.handleInput}
          clearTodos={this.clearTodos}
          textField={this.state.textField}
        />
      </div>
    );
  }
}

export default App;
