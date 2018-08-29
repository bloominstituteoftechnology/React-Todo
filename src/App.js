import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {

  // constructor
  constructor() {
    super();
  }

  // add state 
  state = {
    input: "",
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

  // addTodo method
  addTodo = event => {
    event.preventDefault();
    const task = this.state.input;
    const id = Date.now();
    const nextTodo = {task: task, id: id, completed: false };
    let todos = this.state.todos;
    todos.push(nextTodo);
    this.setState({todos: todos, input: "" });
  };

  // updateInput method
  updateInput = event => {
    this.setState({ input: event.target.value });
  };

  // toggleCompleted method
  toggleCompleted = id => {
    // take a sliced copy of the todos
    let todos = this.state.todos.slice();

    // map over the todos, toggle the .completed data item in the todo with matching id and return it
    todos = todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });
    // set the state of the old todos to the new toggled set
    this.setState({todos: todos});
  };

  // TODO: clearCompleted method
  clearCompleted = event => {};
  // render method
  render() {
    return (
      <div className="main-wrapper">
        <h2>Todo List: MVP</h2>
        <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted} />
        <TodoForm input={this.state.input} addTodo={this.addTodo} updateInput={this.updateInput} />
      </div>
    );
  }
}

export default App;
