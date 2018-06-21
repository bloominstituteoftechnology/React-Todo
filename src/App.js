import React from 'react';
// import { render } from "react-dom";
// import Todo from "./Todo";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
    constructor() {
    super();
    this.state = {
      newTodo: "",
      todos: [
        
          {
            task: 'Organize Garage',
            id: 1528817077286,
            completed: false
          },
          {
            task: 'Bake Cookies',
            id: 1528817084358,
            completed: false
          }
        ]
      
    };
  }
    handleAddTodo = event => {
      this.setState({ [event.target.name]: event.target.value });
    };


    handleSubmitTodo = () => {
      const { tasks } = this.state;
      tasks.push(this.state.newTodo);
      this.setState({ tasks, newTodo: "" });
    };

  render() {

    return (
      <div>
        <h2>My To Do List</h2>
        <TodoList
        newTodos={this.state.todos}
        />
      </div>
    );
  };
};

const rootElement = document.getElementById("root");

export default App;