import React, { Component } from "react";
import Todo from "./Todo.js";
import "./TodoList.css";
class TodoList extends Component {
  constructor() {
    super();
    const todos = JSON.parse(window.localStorage.getItem("todos")) || [];
    this.state = {
      todos,
      newTodo: ""
    };
  }

  handleTodoInput = event => {
    this.setState({ newTodo: event.target.value });
  };

  addTodo = event => {
    event.preventDefault();
    const todoList = this.state.todos;
    todoList.push({ text: this.state.newTodo, completed: false });
    window.localStorage.setItem("todoList", JSON.stringify(todoList));
    this.setState({ newTodo: "", todos: todoList });
  };
  removeTodo = num => {
    console.log(num);
    const todoList = this.state.todos;
    todoList.splice(num, 1);
    this.setState({ todos: todoList });
  };

  removeTodo = num => {
    let todos = this.state.todos;
    todos.splice(num, 1);
    window.localStorage.setItem("todos", JSON.stringify(todos));
    this.setState({
      todos,
      newTodo: this.state.newTodo
    });
  };

  render() {
    return (
      <div id="TodoList">
        {this.state.todos.map((todo, i) => {
          return (
            <div key={i}>
              <Todo
                key={"todo" + i}
                todo={todo}
                button={
                  <button
                    key={"button" + i}
                    onClick={this.removeTodo.bind(null, i)}
                  >
                    X
                  </button>
                }
              />
            </div>
          );
        })}
        <form onSubmit={this.addTodo}>
          <input
            type="text"
            onChange={this.handleTodoInput}
            placeholder="Add a New ToDo"
            value={this.state.newTodo}
          />
        </form>
      </div>
    );
  }
}

export default TodoList;

// import React, { Component } from "react";

// class TodoList extends Component {
//   constructor() {
//     super();
//     this.state = {
//       list : ['Task one', 'Task two', 'Task three'],
//       newTodo: ''
//     };
//   }

//   addTodo = (event) => {
//     event.preventDefault();
//     const TodoList = this.state.list;
//     TodoList.push(this.state.newTodo);
//     this.setState({
//       list: TodoList,
//       newTodo: ''
//     })
//   }

//   handleTodoList = (event) => {
//     this.setState({newTodo:event.target.value});
//   }

//   render() {
//     return (
//       <div>
//         {this.state.list.map(task => <div> {task}</div>)}
//         <form onSubmit = {this.addTodo}>
//           <input type = "text"
//           onChange = {this.handleTodoList}
//           placeholder = "Add a new Task"
//           value = {this.state.newTodo}
//           />
//         </form>
//       </div>
//     );
//   }}

// export default TodoList;
