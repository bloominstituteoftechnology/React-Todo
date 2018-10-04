import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

import './components/TodoComponents/Todo.css';
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  state = {
    todos: [],
    newTodoItem: '',
    id: 0,
  };

  addTodoItem = (event) => {
    event.preventDefault();
    if (this.state.newTodoItem.length > 0) {
      this.setState({
        todos: [
          ...this.state.todos,
          {
            item: this.state.newTodoItem,
            id: this.state.id,
            completed: false,
          },
        ],
        newTodoItem: '',
        id: this.state.id + 1,
      });
    }
  };

  clearAll = (event) => {
    event.preventDefault();
    const todosCopy = this.state.todos.slice();
    todosCopy.splice(0, this.state.todos.length);
    this.setState({
      todos: todosCopy,
    });
  };

  changeHandler = (event) => {
    this.setState({ newTodoItem: event.target.value });
  };

  markComplete = (id) => {
    console.log(id);
    // const newArray = this.state.todo.map((todo) => {
    //   if (todo.id === ) {

    //   }
    //   return todo;
    // });
  };

  render() {
    return (
      <div>
        <TodoList
          todos={this.state.todos}
          newTodoItem={this.state.newTodoItem}
          markComplete={this.markComplete}
        />
        <TodoForm
          text={this.state.newTodoItem}
          changeHandler={this.changeHandler}
          onSubmit={this.addTodoItem}
          addTodoItem={this.addTodoItem}
          clearAll={this.clearAll}
        />
      </div>
    );
  }
}

export default App;

// App is container
// TodoList will contain TodoItem components
// TodoForm will create new TodoItem components and push them into TodoList
