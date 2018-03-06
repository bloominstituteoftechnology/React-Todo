import React, { Component } from "react";
import Todo from "./Todo.js";

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

  removeTodo = event => {
    let todos = this.state.todos;
    const index = Array.from(
      event.target.parentNode.parentNode.children
    ).indexOf(event.target.parentNode);
    todos.splice(index, 1);
    window.localStorage.setItem("todos", JSON.stringify(todos));
    this.setState({
      todos,
      newTodo: this.state.newTodo
    });
  };

  render() {
    return (
      <div>
        {this.state.todos.map((todo, i) => {
          return (
            <div key={i}>
              <button key={"button" + i} onClick={this.removeTodo}>
                x
              </button>
              <Todo key={"todo" + i} todo={todo} />
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
