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
      todoList: [],
      error: '',
    }
  }

  addTodo = (title, time, body) => {
    // using the result of the addTodo function bubbled up from TodoForm, I append a new todo to the end of the current todoList array in this components state
    if(title && time && body){
      this.setState({
        todoList: [...this.state.todoList, {title, time, body}]
      })
    } else {
      if(!title){this.setState({error: 'Missing Message Title'})};
      if(!time){this.setState({error: 'Missing Message Time'})};
      if(!body){this.setState({error: 'Missing Message Body'})};
    }
  }

  render() {
    return (
        <div className="container">
          <h1>App Component</h1>
          <TodoList todoList={this.state.todoList} addTodo={this.addTodo} error={this.state.error}/>
        </div>
    );
  }
}

export default App;
