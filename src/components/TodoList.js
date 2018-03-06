import React, { Component } from "react";
import Todo from "./Todo.js";

class TodoList extends Component {
  constructor() {
    super();

    this.state = {
      todos: [{}],
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
    this.setState({ newTodo: "", todos: todoList });
  };
  removeTodo = num => {
    console.log(num);
    const todoList = this.state.todos;
    todoList.splice(num, 1);
    this.setState({ todos: todoList });
  };
  render() {
    return (
      <div>
        {this.state.todos.map((todo, i) => (
          <div>
            <Todo
              key={i}
              todo={todo}
              button={
                <button onClick={this.removeTodo.bind(null, i)}>X</button>
              }
            />
          </div>
        ))}
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
