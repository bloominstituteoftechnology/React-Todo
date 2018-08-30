import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from "./components/TodoComponents/TodoForm";
import "./components/TodoComponents/Todo.css";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super(); //let's us access lifestyle methods (hooks)
    this.state = {
      todos: [
        {
          task: "Organize JS Notes",
          id: 1,
          completed: false
        },
        {
          task: "Make Energy Bar",
          id: 2,
          completed: false
        },
        {
          task: "Do Shopping",
          id: 3,
          completed: false
        },
        {
          task: "Feed the Cat",
          id: 4,
          completed: false
        }
      ],
      todo: ""
    };
  }
  addTodo = element => {
    element.preventDefault();
    const todos = this.state.todos.slice();
    todos.push({ task: this.state.todo, completed: false, id: Date.now() });
    this.setState({ todos, todo: "" });
  };

  changeTodo = element => this.setState({ [element.target.name]: element.target.value });

  toggleTodoComplete = id => {
    let todos = this.state.todos.slice();
    todos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });
    this.setState({ todos });
  };

  clearCompletedTodos = element => {
    element.preventDefault();
    let todos = this.state.todos.slice();
    todos = todos.filter(todo => !todo.completed);
    this.setState({ todos });
  };

  render() {
    return (
      <div style={{ backgroundColor:"#f2d0ef", textAlign: "center", width: "200px", minHeight: "400px", color:"blue", padding: "25px", border:"1px double red"}}>
        <h2 style={{fontWeight:"bold", color:"#590f54"}}>What to Do Today?</h2>
        <TodoList
          handleToggleComplete={this.toggleTodoComplete}
          todos={this.state.todos}
        />
        <TodoForm
          value={this.state.todo}
          handleTodoChange={this.changeTodo}
          handleAddTodo={this.addTodo}
          handleClearTodos={this.clearCompletedTodos}
        />
      </div>
    );
  }
}

export default App;
