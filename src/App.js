import React from "react";
import ReactDOM from "react-dom";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
//import "./styles.css";

const todoArr = [
  {
    id: 1528817077286,
    task: "Organize Garage",
    completed: true
  },
  {
    id: 1528817084358,
    task: "Clean Room",
    completed: false
  },
  {
    id: 1528817084368,
    task: "Clean Car",
    completed: true
  },
  {
    id: 1528817084388,
    task: "Clean Kitchen",
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todoArr
    };
  }

  appendNewTodo = text => {
    // first make an object with the same attributes as the object in the todoArr
    // set it's task value to what was passed to it from the handleSubmit method in TodoForm
    const newTodo = {
      id: Date.now(),
      task: text,
      completed: false
    }

    // now setState to update this.state here in App
    this.setState(prevState => {
      // first make a copy of the previous state of this.state.todos
      const todos = prevState.todos.slice();
      // now push the newTodo onto the copy
      todos.push(newTodo);
      // now set this.state.todos = to the new todos copy with the added task
      return { todos: todos }
    })
  }

  handleCompleted = event => {
    if (!this.state.completed) {
      let newTodoArr = this.state.todos.filter( props => {
        return props.completed != true
      })
      this.setState({todos: newTodoArr})
    }
  }

  toggleCompleted = id => {
    let todoArray = this.state.todos.slice();
    todoArray = todoArray.map(todo => {
      if (id === todo.id) { // match id sent in from Todo onClick event
        todo.completed = !todo.completed; // flip completed status
        return todo;
      } else {
        return todo;
      }
    })
    this.setState({todos: todoArray})
  }

  render() {
    return (
      <div>
        <h1>Todo List App:</h1>
        <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
        <TodoForm
          createTodo={this.appendNewTodo}
          clearCompleted={this.handleCompleted}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
