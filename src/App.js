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
    this.setState({
      todoList: [...this.state.todoList, todo]
    })
  }

  render() {
    return (
        <div className="container">
          <TodoList todoList={this.state.todoList} handleTodo={this.addTodo}/>
        </div>
    );
  }
}

export default App;
