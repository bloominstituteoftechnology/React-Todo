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
      arr: [], 
      todo: ''
    };
  }

  addTodo = (event) => {
    // let form = document.querySelector(".form");
    // myTodoArr.push({task:form.value, id:Date.now(), completed:false});
    event.preventDefault();
    const todo = this.state.arr.slice();
    todo.push({task:this.state.todo, id:Date.now(), completed:false});
    this.setState({arr:todo, todo:''});
  }

  clearCompleted = () => {
    this.state.arr.forEach(item => {
      // console.log(item);
      if(item.completed === true) {
        item.style.display = "none";
      }
    })
  }

  handleInputChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  toggleCompleted = (event) => {
    console.log(event);
    event.target.style.textDecoration = "line-through";
  }

  render() {
    return (
      <div>
        <TodoList arr={this.state.arr} toggle={this.toggleCompleted} />
        <TodoForm handleInput={this.handleInputChange} add={this.addTodo} clear={this.clearCompleted} value={this.state.todo} />
      </div>
    );
  }
}

export default App;
