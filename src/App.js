import React from "react";
import ToDoForm from "./components/TodoForm";
import ToDoList from "./components/TodoList";
import "./components/Todo.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todosArray: [],
    };
  }

  handleAddTodo = (newTodoName) => {
    const newTodo = {
      todoName: newTodoName,
      id: Date.now(),
      completed: false,
    };

    const newTodoArray = [...this.state.todosArray, newTodo];
    this.setState({
      todosArray: newTodoArray,
    });
  };

  handleTodoToggle = (itemId) => {
    this.setState({
      todosArray: this.state.todosArray.map((item) => {
        if (itemId === item.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      }),
    });
  };

  removeCompleted=()=>{
    const newTodos=this.state.todosArray.filter((item)=>{
      return(!item.completed)
    });
    this.setState({
      todosArray:newTodos
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <ToDoForm handleAddTodo={this.handleAddTodo}></ToDoForm>
        <ToDoList
          todosArray={this.state.todosArray}
          handleTodoToggle={this.handleTodoToggle}
          todos={this.state.todosArray}
        ></ToDoList>
         <button onClick={this.removeCompleted}>Clear completed todos</button>
      </div>
    );
  }
}

export default App;
