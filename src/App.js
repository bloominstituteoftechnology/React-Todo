import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import './App.css';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      todoList: []
    }
  }

  addTodo = (todo) => {
    // using the result of the addTodo function bubbled up from TodoForm, I append a new todo to the end of the current todoList array in this components state
    this.setState({
      todoList: [...this.state.todoList, todo]
    })
  }

  render() {
    return (
        <div className="container">
          <h1>App Component</h1>
          <TodoList todoList={this.state.todoList} addTodo={this.addTodo}/>
        </div>
    );
  }
}

export default App;
