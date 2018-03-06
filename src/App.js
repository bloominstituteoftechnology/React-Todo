import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

const App = () => (
  <div>
    <h2>Todo App</h2>

  </div>
);

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      newTodo: ''
    };

addTodo = (event) => {
    event.preventDefault();
    const todoList = this.state.todos;
    todoList.push(this.state.newTodo);
    this.setState({
      newTodo: '',
      todos: todoList
    });
  }
};

handleTodoInput = (event) => {
  this.setState({ newTodo: event.target.value });
};

render() {
    return (
        <div>
            {this.state.todos.map(todo => <ChildComponent thing={todo} />)}
            <form onSubmit={this.addTodo}>
                <input type="text" onChange={this.handleTodoInput} placeholder="Add a new Todo" value={this.state.newTodo} />
            </form>
        </div>
    );
}
}




export default App;
