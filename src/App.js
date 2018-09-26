import React from 'react';
import { render } from 'react-dom';
import Todo from './components/TodoComponents/Todo';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './App.css'


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todoList: [],
      currentTodo: {},
      inputValue: "...todo",
    };
  }


  inputHandler = (event) => {
    console.log(event.target.value);
  };

  addHandler = (event) => {
    console.log("Add todo");
  };

  clearHandler = (event) => {
    console.log("Clear completed todos");
  };


  render() {
    return (
      <div>
        <h2>Mini-Todo!</h2>
        <div className="list-container">

        </div>
        <TodoForm controller={this} />
      </div>
    );
  }
}

export default App;
