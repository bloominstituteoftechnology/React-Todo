import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm'
import TodoList from './components/TodoComponents/TodoList'





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

  onChange = event => {
    this.setState({ todo: event.target.value });
  }

  todosAdd = event => {
    const todosCopy = this.state.todos.slice();
    todosCopy.push(this.state.todo);
    this.setState({ todos: todosCopy, todo: "" });
  }

  onClear = event => {
    let todosCopy = this.state.todos.slice();
    todosCopy = [];
    this.setState({ todos: todosCopy, todo: "" });
  }

  // handleKeyUp = event =>  {
  //   if (event.key === 'Enter') { return todosAdd()};
  // }

  render() {
    return (
      <div>
        <h2>Your Todo List</h2>
        <TodoForm
          passedChanged={this.onChange}
          passedValue={this.state.todo}
          onAddClick={this.todosAdd}
          onClearClick={this.onClear}
          // onEnterKeyUp = {this.handleKeyUp}
           />
        <TodoList passedTodos={this.state.todos} />
        {/* <input
          type="text"
          onChange={this.onChange}
          placeholder="Add Todo"
          value={this.state.todo}
        />*/}
        {/* <button onClick={this.todosAdd}>Add</button>
        <button onClick={this.onClear}>Clear</button>  */}
      </div>
    );
  }
}

export default App;
