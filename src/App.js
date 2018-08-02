import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

const tasksArray = [
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
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Todo List: MVP",

      list: tasksArray,

      inputValue: ""
    };
  }

  updateInputValue = event => {
    const { value } = event.target;
    this.setState({ inputValue: value });
  };

  submitNewTask = event => {
    event.preventDefault();
    console.log(this.state.inputValue);
    this.setState(prevState => ({
      list: prevState.list.concat({
        id: new Date(),
        task: prevState.inputValue,
        completed: false
      }),
      inputValue: ""
    }));
  };

  toggleTodoComplete =id => {
    let todos = this.state.todos.slice();
    todos = todos.map(todo =>{
      if (todo.id === id) {
        todo.completed= !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });
    this.setState({todos});
  };

  clearCompletedTodos = event => {
    event.preventDefault ();
    let todos = this.state.list.slice();
    todos = todos.filter(todo => !todo.completed);
    this.setState({todos});
  };

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <TodoList 
        handleToggleComplete = {this.toggle.todoComplete}
        taskList={this.state.list} />
        <TodoForm
          inputValue={this.state.inputValue}
          updateInputValue={this.updateInputValue}
          submitNewTask={this.submitNewTask}
        />
      </div>
    );
  }
}

export default App;