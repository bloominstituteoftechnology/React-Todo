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

  addTodo = (text) => {
    console.log('add todo function');
    this.setState({
      todoList: [...this.state.todoList, text]
    })
  }

  render() {
    return (
        <div className="container">
          ___ App - Component ___
          <TodoList todoList={this.state.todoList} addTodo={this.addTodo}/>
        </div>
    );
  }
}

export default App;
