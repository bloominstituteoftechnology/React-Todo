import React from 'react';
import TodoList from "./components/TodoComponents/TodoList";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change 

  constructor() {
    super();
    this.state = {
      heading: "To-do List MVP",
      todos: [
        "Buy bread",
        "Drink water",
        "Do laundry",
        "Call Susan"
      ],
      todo: ""
    };
  }

// this lets us type in the input box
  inputNewTodo = event => {
    this.setState({ todo: event.target.value });
  };

// this adds the new todo to the list
  addTodo = () => {
    const todos = this.state.todos.slice();
    todos.push(this.state.todo);
    this.setState({ todos: todos, todo: "" });
  };

  render() {
    
    return (
      <div>
        <h2>{this.state.heading}</h2>
        <input
          type="text"
          onChange={this.inputNewTodo}
          placeholder="Add todo"
          value={this.state.todo}
        />
        <button onClick={this.addTodo}>Add todo</button>
        <TodoList myTodos=
        {this.state.todos} />
      </div>
    );
  }
}

export default App;
