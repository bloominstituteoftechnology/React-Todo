import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import FinTodoList from "./components/TodoComponents/FinTodoList";
import "./components/TodoComponents/Todo.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      completedTodoList: [],
      inputText: "",
      newTask: ""
    };
  }

  changeHandler = event => {
    this.setState({ inputText: event.target.value });
  };

  addNewItem = event => {
    event.preventDefault();
    this.setState({
      todoList: [
        ...this.state.todoList,
        {
          task: this.state.inputText,
          id: Date.now(),
          completed: false,
          backgroundColor: this.getRandomColor()
        }
      ],
      newTask: "",
      inputText: ""
    });
    this.itemStyle = {
      backgroundColor: this.state.todoList.backgroundColor
    };
  };

  clearCompleted = event => {
    event.preventDefault();
    this.setState({
      todoList: this.state.todoList,
      completedTodoList: [ ],
      inputText: "",
      newTask: ""
    })
  };

  completeTask = (event, id) => {
    let thisTask = this.state.todoList.filter(item => item.id === id);
    thisTask[0].completed = !thisTask[0].completed;
    let otherTasks = this.state.todoList.filter(item => item.id !== id);
    let completedTasks = this.state.completedTodoList;
    console.log(event.target.style.color)
    this.setState({
      todoList: [...otherTasks],
      completedTodoList: [...completedTasks, thisTask[0]],
      inputText: "",
      newTask: ""
    });
  };

  unCompleteTask = (event, id) => {
    let thisTask = this.state.completedTodoList.filter(item => item.id === id);
    thisTask[0].completed = !thisTask[0].completed;
    let otherTasks = this.state.completedTodoList.filter(item => item.id !== id);
    let uncompletedTasks = this.state.todoList;
    console.log(event.target.style.color)

    this.setState({
      todoList: [...uncompletedTasks, thisTask[0]],
      completedTodoList: [...otherTasks],
      inputText: "",
      newTask: ""
    });
  };


  getRandomColor() {
    const numbers = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += numbers[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    return (
      <div className="todoListContainer">
        <div className="lists">
        <h1>Finished Tasks</h1>
          <FinTodoList
            finTodoList={this.state.completedTodoList}
            unCompleteTask={this.unCompleteTask}
            itemStyle={this.itemStyle}
          />
          <h2>Todo</h2>
          <TodoList
            todoList={this.state.todoList}
            completedTodoList={this.state.completedTodoList}
            completeTask={this.completeTask}
            itemStyle={this.itemStyle}
          />
        </div>
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
