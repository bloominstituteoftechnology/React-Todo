import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    // step 2. call your `constructor`
    super();
    this.state = {
      list: [
        {
          task: "Organize Garage",
          id: 1528817077286,
          completed: false
        },
        {
          task: "Bake Cookies",
          id: 1528817084358,
          completed: false
        }
      ],
      newToDo: ""
    };
    // AddTodo = this.AddTodo.bind(this);
  }

  AddTodo = event => { //handlechange
    event.preventDefault();
    this.setState({ newToDo: event.target.value });
  };

  updateTodos = event => {

  event.preventDefault();
  let obj = {}
  obj.task = this.state.input;
  obj.id= Math.floor(Date.now() + Math.random());
  obj.completed = false;
  const todo = this.state.todos;
  todo.push(obj);
  this.setState({todo: todo, input: ''})

  }

  render() {
    return (
      <div>
        <TodoList stuffToDo={this.state.list} />
        <TodoForm 
        onChange={this.AddTodo}
        input={this.state.input}
        oonSubmit={this.updateTodos} />
      </div>
    );
  }
}

export default App;
