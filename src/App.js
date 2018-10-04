import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import "./components/TodoComponents/Todo.css";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props);
    this.state = {
      todoArr: [
        {
          task: "build todo app",
          id: 4,
          completed: false
        },
        {
          task: "do some stuff",
          id: 8,
          completed: false
        },
        {
          task: "do some more stuff",
          id: 15,
          completed: false
        }
      ],
      inputText: ""
    };
  }

  //handler functions

  toggleCompleted = e => {
    let id = parseInt(e.currentTarget.id, 10);
    let newArr = this.state.todoArr;
    newArr.forEach(item => item.completed = (item.id === id) ? !item.completed : item.completed);
    this.setState(
      {todoArr: newArr})
  }

  changeHandler = e => {
    this.setState({inputText: e.target.value});
  };

  addNewTask = e => {
    e.preventDefault();
    this.setState({todoArr: [
      ...this.state.todoArr,
      {task: this.state.inputText,
      id: Date.now(),
      completed: false
  },
    ],
    inputText: ''});
  }

  clearAllCompleted = e => {
    // pass
  }


  // calls <TodoList /> with this.state.todoArr as props.
  // TodoList sends a single object to Todo.
  // Todo builds the single component.

  render() {
    return (
      <div className="todoContainer">
        <h2>Welcome to your Todo App!</h2>
        <TodoList
          todoArr={this.state.todoArr}
          toggleCompleted={this.toggleCompleted}
        />
        <TodoForm 
        addNewTask={this.addNewTask}
        inputText={this.state.inputText} 
        changeHandler={this.changeHandler}
        />
      </div>
    );
  }
}

export default App;
