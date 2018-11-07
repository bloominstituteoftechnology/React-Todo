import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

import './App.css';

const ToDo = [
  // {
  //   task: 'Organize Garage',
  //   id: 1528817077286,
  //   completed: false
  // },
  // {
  //   task: 'Bake Cookies',
  //   id: 1528817084358,
  //   completed: false
  // }
];


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      toDoItems: ToDo,
      inputText: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  addItem = event => {
    event.preventDefault();
    this.setState({
      toDoItems: [...this.state.toDoItems, {task: this.state.inputText, id: Date.now(), completed: false}],
      inputText: ""
    });
  };

  render() {
    return (
      <div className="mainContainer">
        <TodoList toDoItems={this.state.toDoItems}/>
        <TodoForm 
          inputText = {this.state.inputText}
          handleChange = {this.handleChange}
          addItem = {this.addItem}
        />
      </div>
    );
  }
}

export default App;
