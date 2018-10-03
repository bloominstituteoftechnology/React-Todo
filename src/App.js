import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import './components/TodoComponents/Todo.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [
      ],
      inputText: "",
      newTask: ""
    };
  }

  changeHandler = event => {
    this.setState({ inputText: event.target.value });
    console.log(this.state.todoList);
  };

  addNewItem = event => {
    event.preventDefault();
    this.setState({
      todoList: [
        ...this.state.todoList,
        {
          task: this.state.inputText,
          id: Date.now(),
          completed: false
        }
      ],
      newTask: "",
      inputText: ""
    });
  };

  clearCompleted = event => {
    event.preventDefault();
    let unCompletedTasks = this.state.todoList.filter(
      item => item.completed === false
    );
    this.setState({ todoList: unCompletedTasks})
    console.log(unCompletedTasks);
  };

  completeTask = event => {
    // event.preventDefault();
    console.log(event);
    // let currentList = this.state.todoList; 
    // let currentTask = event.target.innerText;
    // let theTask = this.state.todoList.filter(
    //   item => item.task === currentTask
    // );
    // if (theTask.completed === true) {
    //   event.target.style.color = "black";
    //   event.target.style.textDecoration = "none";
    //   this.setState( {  } )
    // } else {
    //   event.target.style.color = "red";
    //   event.target.style.textDecoration = "line-through";
      
    // }
  };

  render() {
    return (
      <div className="todoListContainer">
        <h1>Todo List</h1>
        <TodoList
          todoList={this.state.todoList}
          completeTask={this.completeTask}
        />
        <TodoForm
          changeHandler={this.changeHandler}
          inputText={this.state.inputText}
          addNewItem={this.addNewItem}
          newTask={this.state.newTask}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
