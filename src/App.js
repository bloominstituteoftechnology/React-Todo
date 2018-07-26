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
    let toDoArray = this.state.arr.filter(todo => {
      return !todo.completed;
    });
    this.setState({arr: toDoArray});
  }

  handleInputChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  toggleCompleted = (event, id, completed) => {
    // console.log('target', event.target);
    event.target.style.textDecoration = !completed ? "line-through" : "none" ;

    let modifiedArr = this.state.arr.map(item => {
      if (id === item.id) {
        item.completed = !item.completed;
        return item;
      } else {
        return item;
      }
    });
    this.setState({arr: modifiedArr});
  }

  render() {
    return (
      <div className="container">
      <div className="content">
        <TodoForm handleInput={this.handleInputChange} add={this.addTodo} clear={this.clearCompleted} value={this.state.todo} />
        <TodoList arr={this.state.arr} toggle={this.toggleCompleted} />
      </div>
      </div>
    );
  }
}

export default App;
