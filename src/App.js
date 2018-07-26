import React from "react";
import './App.css'
import "./components/TodoComponents/Todo.css";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      todo: '',
      addNew: false
    };
  }
  handleAddNew = () => {
    this.setState({ addNew: true })
  }
  handleAddTodo = e => {
    e.preventDefault()
    this.setState(prevState => {
      return {
        todos: prevState.todos.concat({
          id: Date.now(),
          task: this.state.todo,
          completed: false,
        }),
        todo: '',
        addNew: false
      }
    });
  };
  handleChange = (e) => {
    this.setState({ todo : e.target.value });
  }
  handleClear = () => {
    const todos = this.state.todos.filter(todo => todo.completed);
    this.setState({ todos: todos });
  };
  handleCompleted = id => {
    this.setState(prevState => {
      return {
        todos: prevState.todos.map(todo => {
          if (todo.id === id) {
            todo.completed = !todo.completed;
            return todo;
          } else {
            return todo;
          }
        }),
      };
    });
  };
  render() {
    return (
      <div className="mainbody">
        <div className="content">
        <h1>To Do:</h1>
        <TodoList
          todos={this.state.todos}  
          handleCompleted={this.handleCompleted}
        />
        {this.state.addNew ? <TodoForm
          value={this.state.todo}
          handleAddTodo={this.handleAddTodo}
          handleClear={this.handleClear}
          handleChange={this.handleChange}
        /> 
        : <div className="addNewBtn" onClick={this.handleAddNew}>+</div>}
      </div>
      </div>
    );
  }
}
