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
      todoItems: [
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
      inputText: ''
    };
  }

  addTodo = event => {
    event.preventDefault();
    if (this.state.inputText) {
      this.setState({
        todoItems: [...this.state.todoItems, {task: this.state.inputText, id: Date.now(), completed: false}],
        inputText: ''
      });
    }
  }

  clearTodo = (event) => {
    event.preventDefault();
    let tmpArr = [...this.state.todoItems];
    tmpArr = tmpArr.filter((obj) => obj.completed === false);
    this.setState({
      todoItems: tmpArr
    });
  }

  toggleTodo = (id) => {
    let tmpArr = [...this.state.todoItems];
    tmpArr = tmpArr.map((obj) => {
      if(obj.id === id) {
        obj.completed = !obj.completed;
      }
      return obj;
    });
    this.setState({
      todoItems: tmpArr
    });
  }

  handleInput = event => {
    this.setState({
      inputText: event.target.value
    });
  }

  render() {
    return (
      <div>
          <h2>ToDo List</h2>
          <TodoList 
            todoItems={this.state.todoItems}
            toggleTodo={this.toggleTodo}
           />
          <TodoForm
            addTodo={this.addTodo}
            clearTodo={this.clearTodo}
            inputText={this.state.inputText}
            handleInput={this.handleInput}
           />
      </div>
    );
  }
}

export default App;
