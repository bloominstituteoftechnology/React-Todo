import React from 'react';
import ReactDOM from "react-dom";

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import Todo from './components/TodoComponents/Todo';

const todoArray = [
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
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoList: todoArray,
      task: "",
      // id: ,
      // completed:
    };
  }

  handleChanges = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addNewTodo = ev => {
    ev.preventDefault();
    this.setState({
      TodoList: [
        ...this.state.todoList,
        { task: this.state.task }
      ],
      task: ""
    });
  };

  render() {
    return (
      <div>
        <TodoForm />
      </div>
    );
  }
}

export default App;
