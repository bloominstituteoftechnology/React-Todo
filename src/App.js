import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
const todos = [
  {
    name: "go to class",
    id: "1",
    completed: false,
  },
  {
    name: "Get lunch",
    id: "2",
    completed: false,
  },
];
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: todos,
    };
  }

  //Submit Todo for form
  handleTodoAdd = (itemName) => {
    const newTodo = {
      name: itemName,
      id: this.state.todos.length,
      completed: false,
    };
    const copyTodo = [...this.state.todos, newTodo];
    this.setState({
      todos: copyTodo,
    });
  };

  handleTodoToggle = (itemId) => {
    this.setState({
      todos: this.state.todos.map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            purchased: !item.purchased
          }
        }
        return (item);
      }),
    });
  };


    handleTodoCompleted = () => {
      this.setState({
        todos: this.state.todos.filter(item=>{
          return(!item.purchased)
        })
      })
    }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm handleTodoAdd={this.handleTodoAdd} />
        <TodoList todos={this.state.todos} handleTodoToggle={this.handleTodoToggle} handleTodoCompleted={this.handleTodoCompleted}/>
      </div>
    );
  }
}

export default App;
