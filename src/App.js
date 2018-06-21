import React from "react";
import ReactDom from "react-dom";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [{}]
    };
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  addTodo = e => {
    e.preventDefault();
    const todos = this.state.todos.slice();
    todos.push({ task: this.state.TodoList, completed: false, id: Date.now() });
    this.setState({ todos, todo: "" });
  };

  changeTodo = e => this.setState({ [e.target.name]: e.target.value });

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

clearCompletedTodos = e => {
  e.preventDefault();
  let todos = this.state.todos.slice();
  todos = todos.filter(todo => !todo.completed)
  this.setState({ todos });
};


  render() {
    return (
      <div className="container">
      <h2> Todo List: React App</h2>
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


        <h2>Todo List: MVP</h2>
        <h1>Learn setstate()</h1>
        <h1> Style my Todo list</h1>
        <button onclick="displayDate()">Add Todo</button>
        <button onclick="displayDate()">Clear Completed</button>
      </div>
    );
  }
}

changeGreetingHandler = event => {
  console.log(TodoList);
  this.setState({});
  alert();
};

element.addEventListener("click", function() {
  alert("Todo List!");
});

element.addEventListener("click", myFunction);
function myfunction() {
  alert("TodoList");
}

export default App;
