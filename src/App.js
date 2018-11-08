import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

import "./App.css";
import './components/TodoComponents/Todo.css';

const ToDo = [
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
      toDoItems: [
        ...this.state.toDoItems,
        { task: this.state.inputText, id: Date.now(), completed: false }
      ],
      inputText: ""
    });
    console.log(this.state.toDoItems);
  };

  changeStyle = id => {
    this.setState({
      toDoItems: this.state.toDoItems.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: item.completed === false ? true : false
          };
        } else {
          return item;
        }
      })
    });
    console.log(this.state.toDoItems);
  };

  clear = event => {
    event.preventDefault();
    this.setState({
      toDoItems: this.state.toDoItems.filter(item => item.completed === false)
    });
  };




  render() {
    return (
      <div className="mainContainer">
        <TodoList 
        toDoItems={this.state.toDoItems} 
        changeStyle={this.changeStyle} 
        />
        <TodoForm
        clear={this.clear}
          inputText={this.state.inputText}
          handleChange={this.handleChange}
          addItem={this.addItem}
        />
      </div>
    );
  }
}

export default App;
