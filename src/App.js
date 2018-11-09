import React from "react";
import './app.css';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
const toDoData = [
  {
    task: "Organize Garage",
    id: 0,
    completed: false
  },
  {
    task: "Bake Cookies",
    id: 1,
    completed: false
  }
];


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      toDos: toDoData,
      inputText:''
    };
  }
  clearHandle = e => {
    e.preventDefault();
    let toDos = this.state.toDos.slice();
    toDos = toDos.filter(todo => !todo.completed);
    this.setState({ toDos });
  };

  completeHandle = id => {
    let toDos = this.state.toDos.slice();
    toDos = toDos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });
    this.setState({ toDos });
  };
  handler = event => {
    this.setState({
      inputText: event.target.value
    });
  }
  addTodo = event => {
    event.preventDefault();
    this.setState(
          {
           toDos:[...this.state.toDos, {task: this.state.inputText, id: Date.now(), completed: false}],
           inputText:''
          }
    );
  }

  render() {
    return (
      <div>
        <TodoList 
        toDoList = {this.state.toDos}
        completeHandle = {this.completeHandle}
        />
        <TodoForm 
        inputText={this.state.inputText} 
        handler = {this.handler}
        addTodo = {this.addTodo}
        onClear= {this.clearHandle}
        />
      </div>
    );
  }
}

export default App;
