import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  constructor() {
    super();
  }

  state = {
    todoInput: "",
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
  }

  addTodo = event => {
    console.log("hi");
    let todos = this.state.todos;
    todos.push(this.state.todoInput);
    this.setState({ todos: todos });
    event.preventDefault();
  };

  changeTodoInput = event => {
    let todoInput = event.target.value;
    this.setState({ todoInput: todoInput })
  }

  render() {
    return (
      <div>
        <h2>Todo list: MVP</h2>
        <TodoList todos={this.state.todos}/>
        <TodoForm todoInput={this.state.todoInput}
                  addTodo={this.addTodo}
                  changeTodoInput={this.changeTodoInput}/>
      </div>
    );
  }
}

export default App;
