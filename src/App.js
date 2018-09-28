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

  clear = (event, todoComplete) => {
    event.preventDefault();
    const notDone = this.state.todos.filter(todo => todo.completed === false);
    console.log(notDone);
    this.setState({
      todos: notDone,
    })
  };

  clickHandler = (todoId) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === todoId) {
          return {
            task: todo.task,
            id: todo.id,
            completed: !todo.completed,
          }
        } else {
          return todo
        }
      })
    })
  }

  render() {
    return (
      <div>
        <h1>Todo List: MVP</h1>
        <TodoList todos={this.state.todos} clickHandler={this.clickHandler} />
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
