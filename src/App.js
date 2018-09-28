//All of your application data will be stored here
//All of your handler functions should live here
//Design `App` to be the parent component of your application.

import React from 'react';
import TodoList from './components/TodoComponents/TodoList';

//empty array
let data = [];

class App extends React.Component {
  //stored state in component
  constructor(){
    super();
    this.state = {
      input: "",
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
    }
  }
  //handle input takes the input provide in the box and changes the state to reflex that text
  handleInput = (event) => {
    this.setState({input: event.target.value})
  }

  //handles add todo button
  //new object is created to append to the todos array
  //set state changes the todos list to include newly added data
  addTodo = (event) => {
    console.log(this.state.input)
    event.preventDefault();
    data = {
      task: this.state.input,
      id: Date.now(),
      completed: false,
    };
    this.setState({
      input: "",
      todos: [...this.state.todos, data]
    })
  }

  //strike toggles the completed flag state from true to false for crossing out items
  strike = (todoId) => {
    this.setState({
      todos: this.state.todos.map(item => {
        if (item.id === todoId) {
          return {
            task: item.task,
            id: item.id,
            completed: !item.completed,
            addClass: !this.state.addClass,
          }
        }else{
          return item;
        }
      })
    })
  }

  //handles clear completed button
  removeCompleted = () =>{
    console.log("clear")
    this.setState({
      todos: this.state.todos.filter(item => {
        console.log(item.completed)
          return item.completed === !true;
      })
    })
  }
  render() {
    return (
      <div>
        <TodoList state={this.state} 
        input={this.handleInput}
        text={this.state.input}
        add={this.addTodo} 
        remove={this.removeCompleted} 
        strike={this.strike}
        class={this.class}/>
      </div>
    );
  }
}

export default App;
