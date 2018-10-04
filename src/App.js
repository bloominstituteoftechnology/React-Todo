import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import '../src/components/TodoComponents/Todo.css';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: [],

      todo: ""
    };

  }


  addTodo = event => {
    event.preventDefault();
    if (this.state.todo === "") {
      return;
    }
    const todos = this.state.todos.slice();
    todos.push({ 
      task: this.state.todo,
      id: Date.now(), 
      completed: false });

    this.setState({
      todos,
      todo: ""
    });

  };//end addTodo


  handleInput = event => this.setState({ [event.target.name]: event.target.value });

  toggle = id => {

    let todos = this.state.todos.slice()
    todos = todos.map(todo => {
      if (todo.id === id) {

        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });
    this.setState({ todos });
  };

  clearCompleted = event => {
    event.preventDefault();
    let todos = this.state.todos.slice();
    todos = todos.filter(todo => !todo.completed);
    this.setState({ todos });
  };


  render() {

    return (
      <div className = "content">


<TodoForm
          handleAddTodo={this.addTodo}
          value={this.state.todo}
          handleInputChange={this.handleInput}
          handleClearCompleted={this.clearCompleted}
        />
        <TodoList
          todos={this.state.todos}
          handleToggle={this.toggle}
        />

        

      </div>
    );
  }
}
export default App;