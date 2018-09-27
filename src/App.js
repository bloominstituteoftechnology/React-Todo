import React from "react";
import TodoList from "../src/components/TodoComponents/TodoList";
import TodoForm from "../src/components/TodoComponents/TodoForm";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();

    this.state = {
      todo: "",
      todos: []
    };
  }

  inputChange = event => {
    this.setState({
      todo: event.target.value
    });
  };

  addTodo = event => {
    event.preventDefault();
    this.setState(prevState => {
      return {
        todos: [
          ...this.state.todos,
          {
            task: prevState.todo,
            id: Date.now(),
            completed: false
          }
        ],
        todo: ""
      };
    });
  };

  clear = event => {
    event.preventDefault();
    const done = this.state.todos.filter(todo => todo.completed === false);
    this.setState({
      todos: [done]
    });
  };

  render() {
    return (
      <div>
        <h1>Todo List: MVP</h1>
        <TodoList todos={this.state.todos} />
        <TodoForm
          todos={this.state.todos}
          todo={this.state.todo}
          inputChange={event => this.inputChange(event)}
          addTodo={this.addTodo}
          clear={this.clear}
        />
      </div>
    );
  }
}

export default App;
