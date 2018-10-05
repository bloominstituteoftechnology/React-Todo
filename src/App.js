import React from 'react';
import './App.css';
import TodoForm from './components/TodoComponents/TodoForm.js';
import TodoList from './components/TodoComponents/TodoList.js';

class App extends React.Component {
  //#region you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  //#endregion this component is going to take care of state, and any change handlers you need to work with your state
    state={
      goals: [],
      temp: ""
    };


  inputFunction = (event) => {
    this.setState({[event.target.name]: event.target.value});//store input in temporary space.
  }

  addTodoFunction = (event) => {
    event.preventDefault();
    if (this.state.temp !== "") {
    const task = this.state.temp;
    const id = Date.now();
    const newTodo = {
      name: task,
      id: id,
      completed: false
    }

    let todos = this.state.goals; 
    todos.push(newTodo);
    this.setState({goals: todos, temp: ""});//
    }
  }

  clearFunction = (event) => {
    event.preventDefault();
    this.setState({
      goals: this.state.goals.filter(goal => goal.completed === false
        )})
  }

  removeFunction = (id) => {
    let todos = this.state.goals.slice();

    todos = todos.map(todo => {
      if(todo.id === id) {
        todo.completed =!todo.completed;
        return todo;
      }

      else {
        return todo;
      }
    });

    this.setState({goals:todos});
    }

  // addTodoFunction = (event) => {
  //   event.preventDefault();
  //   const task  = {
  //   name: this.state.temp,
  //   id: Date.now(),
  //   completed: false
  // }

  // //this.state.goals.push(task);
  // this.setState({goals: task});

  render() {
    return (
    <div>

      <div className="display">
        <h1>Just Do It! {this.state.message} <span>the list.</span></h1>
        <hr/> 
        
        <div className="list">
          <TodoForm inputHandler={this.inputFunction} clickHandler={this.addTodoFunction} temp={this.state.temp}clearHandler={this.clearFunction}/>
          <h2 className="goals">Goals</h2>
          <div className="list_items"><TodoList removeHandler={this.removeFunction}todos={this.state.goals}/></div>
        </div>
      </div>

    </div>
    );
  }
}
export default App;
