import React from "react";
import ReactDOM from "react-dom";
import ToDoList from "./components/TodoComponents/TodoList";
import Tasks from "./components/TodoComponents/TodoForm"
import "./components/TodoComponents/Todo.css";
// import tasks from "./components/TodoComponents/TodoForm";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Task List",
      todos: ["Add A Task", "Add a second Task"],
      todo: ""
    };
  }
  changeNameHandler = event => {
    this.setState({ todo: event.target.value });
  };
  addTodo = () => {
    const todos = this.state.todos.slice();
    todos.push(this.state.todo);
    this.setState({todos: todos, todo: " "});
  }
  clearTodo = () => {
    this.setState({todos:[""]});
  }

  // strikeTodo = () => {
  //   {todos.map(task => {
  //     return <div onClick={task} key={Math.random()}>{task}</div>;
  // }

  

  render() {
    return (
      <div>
        <h2 key="item1">{this.state.name}</h2>
        <Tasks input = {this.state.todo}
        changeNameHandler = {this.changeNameHandler}
        value = {this.value}
        />  
        <button onClick = {this.addTodo}>Submit</button>
        <button onClick = {this.clearTodo}>Clear</button>
        <ToDoList currentToDo = {this.state.todos} 
                  
        />
       
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
/* <input
type="text"
onChange={this.changeNameHandler} 
placeholder="Add task"
value={this.state.todo}
/> */