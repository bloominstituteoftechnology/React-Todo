import React from 'react';

import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';



class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();

    this.state = { 
      Todos: [
        { task: 'Bake Cookies', id: 1, completed: false },
        { task: 'Prep Cookies for Delivery', id: 2, completed: false },
        { task: 'Deliver Cookies', id: 3, completed: false },
      ],
      Todo: '', 
    };
  }

  changeInput = event => {
    this.setState({ Todo: event.target.value })
  };

  addTask = event => {
    const Todos = this.state.Todos.slice();
    Todos.push({ task: this.state.Todo, id: Date.now(), completed: false });
    this.setState({ Todos, Todo: '' });

  }

  toggleClick = event => {
    console.log('Task Clicked');
  }

  clearCompleted = event => {
    this.setState({ Todos: [] });
  }
  
  render() {
    return (
      <div>
        <TodoForm 
        onChangeInput={this.changeInput} 
        clickEvent={this.addTask} 
        clearCompleted={this.clearCompleted}
        valueOfState={this.state.Todo}
        />
        <TodoList 
        todos={this.state.Todos} 
        handleClick={this.toggleClick}
        />
        <h1>State on input: {this.state.Todo}</h1>
      </div>
    );
  }
}

export default App;
